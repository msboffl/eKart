import prisma from '../DB/db.config';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const createUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).send('All the Fields Are Required');
  }

  const user = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });

  if (user) {
    res.status(400).send('User Already Exists Please Log-In');
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const userz = await prisma.users.create({
    data: {
      username,
      email,
      password: passwordHash,
    },
  });

  console.log(userz);

  res.status(201).send(`User ${username} Created Successfully`);
};

export const logInUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('All the fields are Required');
  }

  const user = await prisma.users.findUnique({
    where: {
      email,
    },
  });

  if (!user || !user.password || user.password === undefined) {
    return res
      .status(400)
      .send('Please Enter valid Credentials==> user noikhe');
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (isValidPassword) {
    const token = await jwt.sign(
      { id: user.id },
      'MysecretToSignJWT@61991688',
      {
        expiresIn: '1h',
      }
    );

    res.cookie('token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + 9 * 360000),
    });
    return res.status(200).send('Logged-In Succussfully');
  } else {
    return res
      .status(401)
      .send('Please Enter valid Credentials ==> Password Galat ba');
  }
};

const getUser = async (req: Request, res: Response) => {
  const { userId } = req.cookies;
};
