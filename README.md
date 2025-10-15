# eKart 🛒

A modern microservices-based ecommerce platform built with a monorepo architecture. This project includes web applications, mobile apps, and backend microservices for a complete ecommerce solution.

## 🏗️ Architecture

eKart follows a microservices architecture with the following components:

- **Frontend Applications**: React-based web admin and Next.js store frontend
- **Mobile Applications**: React Native apps for admin and store management
- **Backend Services**: Spring Boot microservices for authentication, user management, and product catalog
- **API Gateway**: Centralized entry point for all client requests

## 📁 Project Structure

```
eKart/
├── apps/                          # Frontend Applications
│   ├── web-admin/                 # React + Vite admin dashboard
│   ├── web-store/                 # Next.js customer storefront
│   ├── mobile-admin/              # React Native admin app
│   └── mobile-store/              # React Native customer app
├── micros/                        # Backend Microservices
│   ├── api-gateway/               # API Gateway (Spring Boot)
│   ├── auth-service/              # Authentication & Authorization
│   ├── user-service/              # User Management
│   └── product-service/           # Product Catalog
├── packages/                      # Shared packages
├── package.json                   # Root package configuration
├── pnpm-workspace.yaml           # PNPM workspace configuration
└── tsconfig.base.json            # TypeScript base configuration
```

## 🛠️ Technology Stack

### Frontend

- **React 19** - UI library for web admin
- **Next.js 15** - Full-stack framework for web store
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool for web admin

### Backend

- **Spring Boot 3.5.6** - Java microservices framework
- **Java 25** - Programming language
- **Maven** - Dependency management and build tool
- **Lombok** - Boilerplate code reduction

### Development Tools

- **PNPM** - Fast, disk space efficient package manager
- **ESLint** - Code linting and formatting
- **TypeScript** - Static type checking

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** - For frontend development
- **Java 25** - For backend microservices
- **PNPM** - Package manager
- **Maven** - Java build tool

### Installation

1. Clone the repository:

```bash
git clone https://github.com/msboffl/eKart.git
cd eKart
```

2. Install dependencies:

```bash
pnpm install
```

3. Build the auth service:

```bash
pnpm auth:build
```

## 📚 Available Scripts

### Root Level Scripts

```bash
pnpm generate:tree          # Generate project structure tree
pnpm auth:dev              # Start auth service in development mode
pnpm auth:build            # Build auth service JAR file
pnpm auth:start            # Start auth service from JAR
```

### Web Admin (React + Vite)

```bash
cd apps/web-admin
pnpm dev                   # Start development server
pnpm build                 # Build for production
pnpm preview               # Preview production build
pnpm lint                  # Run ESLint
```

### Web Store (Next.js)

```bash
cd apps/web-store
pnpm dev                   # Start development server with Turbopack
pnpm build                 # Build for production with Turbopack
pnpm start                 # Start production server
pnpm lint                  # Run ESLint
```

### Auth Service (Spring Boot)

```bash
cd micros/auth-service
./mvnw spring-boot:run     # Start in development mode
./mvnw clean package       # Build JAR file
java -jar target/auth-service-0.0.1-SNAPSHOT.jar  # Run JAR
```

## 🏃‍♂️ Development Workflow

1. **Start Backend Services**:

   ```bash
   pnpm auth:dev
   ```

2. **Start Frontend Applications** (in separate terminals):

   ```bash
   # Web Admin
   cd apps/web-admin && pnpm dev

   # Web Store
   cd apps/web-store && pnpm dev
   ```

3. **Access Applications**:
   - Web Admin: `http://localhost:5173`
   - Web Store: `http://localhost:3000`
   - Auth Service: `http://localhost:8080`

## 🔧 Services Overview

### Auth Service

- **Port**: 8080
- **Framework**: Spring Boot 3.5.6
- **Purpose**: Handles user authentication and authorization
- **Endpoints**: `/auth/*`, `/health`

### Web Admin

- **Port**: 5173 (dev)
- **Framework**: React 19 + Vite
- **Purpose**: Administrative dashboard for managing the ecommerce platform

### Web Store

- **Port**: 3000 (dev)
- **Framework**: Next.js 15
- **Purpose**: Customer-facing ecommerce storefront

## 📦 Package Management

This project uses PNPM workspaces for efficient package management:

- **Root workspace**: Contains shared dependencies and scripts
- **App workspaces**: Individual frontend applications
- **Microservice workspaces**: Backend services (Java/Maven)

## 🧪 Testing

### Frontend Testing

```bash
# Web Admin
cd apps/web-admin
pnpm test

# Web Store
cd apps/web-store
pnpm test
```

### Backend Testing

```bash
# Auth Service
cd micros/auth-service
./mvnw test
```

## 🚀 Deployment

### Production Build

```bash
# Build all frontend applications
cd apps/web-admin && pnpm build
cd apps/web-store && pnpm build

# Build backend services
pnpm auth:build
```

### Docker Support

_Coming soon - Docker configurations for containerized deployment_

## 📊 Project Status

| Component       | Status     | Framework         | Port |
| --------------- | ---------- | ----------------- | ---- |
| Web Admin       | ✅ Active  | React 19 + Vite   | 5173 |
| Web Store       | ✅ Active  | Next.js 15        | 3000 |
| Auth Service    | ✅ Active  | Spring Boot 3.5.6 | 8080 |
| User Service    | 🚧 Planned | Spring Boot       | TBD  |
| Product Service | 🚧 Planned | Spring Boot       | TBD  |
| API Gateway     | 🚧 Planned | Spring Boot       | TBD  |
| Mobile Apps     | 🚧 Planned | React Native      | TBD  |

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes** and ensure all tests pass
4. **Commit your changes**: `git commit -m 'Add: your feature description'`
5. **Push to the branch**: `git push origin feature/your-feature-name`
6. **Open a Pull Request** with a clear description of your changes

### Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all CI checks pass

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mareedu Saibabu**

- GitHub: [@msboffl](https://github.com/msboffl)
- LinkedIn: [Mareedu Saibabu](https://linkedin.com/in/mareedu-saibabu)

## 🔗 Links

- [Repository](https://github.com/msboffl/eKart)
- [Issues](https://github.com/msboffl/eKart/issues)
- [Discussions](https://github.com/msboffl/eKart/discussions)

## 🙏 Acknowledgments

- [Spring Boot](https://spring.io/projects/spring-boot) for the robust backend framework
- [React](https://reactjs.org/) and [Next.js](https://nextjs.org/) for the frontend frameworks
- [PNPM](https://pnpm.io/) for efficient package management
- [Vite](https://vitejs.dev/) for fast development builds

---

**Happy Coding! 🚀**
