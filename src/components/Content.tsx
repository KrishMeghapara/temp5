import React from 'react';
import './Content.css';

interface ContentProps {
  activeSection: string;
}

const Content: React.FC<ContentProps> = ({ activeSection }) => {
  const renderContent = () => {
    switch (activeSection) {
      case 'getting-started':
        return (
          <div className="content-section">
            <h2>Getting Started</h2>
            <p>
              Follow these steps to set up and run the ASP.NET Core Web API on your local development environment.
            </p>
            
            <h3>Prerequisites</h3>
            <ul>
              <li>.NET 8 SDK or later</li>
              <li>SQL Server (LocalDB, Express, or Full version)</li>
              <li>Visual Studio 2022 or VS Code with C# extension</li>
              <li>Postman or similar API testing tool (optional)</li>
            </ul>

            <h3>Installation Steps</h3>
            
            <h4><span className="step-number">1</span>Create New Project</h4>
            <div className="code-block">
              <pre>{`dotnet new webapi -n MyWebApi
cd MyWebApi`}</pre>
            </div>

            <h4><span className="step-number">2</span>Install Required Packages</h4>
            <div className="code-block">
              <pre>{`dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
dotnet add package Swashbuckle.AspNetCore`}</pre>
            </div>

            <h4><span className="step-number">3</span>Configure Connection String</h4>
            <p>Update your <span className="inline-code">appsettings.json</span> file:</p>
            <div className="code-block">
              <pre>{`{
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\\\mssqllocaldb;Database=MyApiDb;Trusted_Connection=true;"
  },
  "Jwt": {
    "Key": "YourSuperSecretKeyHere123456789",
    "Issuer": "https://localhost:7001",
    "Audience": "https://localhost:7001"
  }
}`}</pre>
            </div>

            <h4><span className="step-number">4</span>Run Database Migrations</h4>
            <div className="code-block">
              <pre>{`dotnet ef migrations add InitialCreate
dotnet ef database update`}</pre>
            </div>

            <h4><span className="step-number">5</span>Run the Application</h4>
            <div className="code-block">
              <pre>{`dotnet run`}</pre>
            </div>

            <div className="success-box">
              <p>
                ✓ Your API should now be running at <strong>https://localhost:7001</strong> and Swagger UI at <strong>https://localhost:7001/swagger</strong>
              </p>
            </div>
          </div>
        );

      case 'overview':
        return (
          <div className="content-section">
            <h2>Project Overview</h2>
            <p>
              The API is built using .NET 8 (or latest) with Swagger enabled for API testing and documentation. 
              The architecture ensures scalability, maintainability, and security.
            </p>
            <div className="highlight">
              <p>
                <strong>Key Features:</strong> Production-ready ASP.NET Core Web API with modern best practices, 
                comprehensive security, and developer-friendly documentation.
              </p>
            </div>
            <div className="feature-grid">
              <div className="feature-card">
                <h4>🚀 Modern Stack</h4>
                <p>.NET 8 with latest features and performance improvements</p>
              </div>
              <div className="feature-card">
                <h4>📚 Swagger Integration</h4>
                <p>Interactive API documentation and testing interface</p>
              </div>
              <div className="feature-card">
                <h4>🔒 Enterprise Security</h4>
                <p>JWT authentication with role-based authorization</p>
              </div>
              <div className="feature-card">
                <h4>📈 Scalable Architecture</h4>
                <p>Clean code structure designed for growth</p>
              </div>
            </div>
          </div>
        );

      case 'response':
        return (
          <div className="content-section">
            <h2>Standard API Response Model</h2>
            <p>
              All endpoints return a consistent response structure to ensure predictable client-side handling. 
              This standardization simplifies error handling and data processing across your application.
            </p>
            <div className="code-block">
              <pre>{`public class ApiResponse<T>
{
    public bool Error { get; set; }
    public string Message { get; set; }
    public T Data { get; set; }
}`}</pre>
            </div>
            <h3>Response Properties</h3>
            <ul>
              <li><strong>Error:</strong> Boolean flag indicating operation success or failure</li>
              <li><strong>Message:</strong> Human-readable description of the operation result</li>
              <li><strong>Data:</strong> Generic type containing the actual response payload</li>
            </ul>
            <div className="highlight">
              <p>
                This pattern ensures consistent error handling and makes it easier to build robust client applications.
              </p>
            </div>
          </div>
        );

      case 'database':
        return (
          <div className="content-section">
            <h2>Database Configuration</h2>
            <p>
              Entity Framework Core is used with SQL Server for data persistence. The DbContext manages 
              entity relationships and database operations with a clean, type-safe API.
            </p>
            <div className="code-block">
              <pre>{`public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) 
        : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Product> Products { get; set; }
}`}</pre>
            </div>

              <h2>
                Add this to Program.cs 
              </h2>
             <div className="code-block">
              <pre>{`
              
              builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))); 

              
              `}</pre>
            </div>

            <h3>Configuration Features</h3>
            <ul>
              <li>Entity Framework Core for ORM capabilities</li>
              <li>SQL Server as the primary database provider</li>
              <li>DbSet collections for entity management</li>
              <li>Migration support for schema versioning</li>
              <li>LINQ query support for type-safe data access</li>
            </ul>
          </div>
        );

      case 'jwt':
        return (
          <div className="content-section">
            <h2>JWT Authentication</h2>
            <p>
              JWT (JSON Web Token) is implemented to secure the API endpoints. Token validation ensures 
              issuer, audience, lifetime, and signing key integrity for robust security.
            </p>
            <div className="code-block">
              <pre>{`var jwtSettings = builder.Configuration.GetSection("Jwt");
                     var key = Encoding.UTF8.GetBytes(jwtSettings["Key"]);
              builder.Services.AddAuthentication("Bearer")
    .AddJwtBearer("Bearer", options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true
        };
    });

builder.Services.AddAuthorization();`}</pre>
            </div>
            <h3>Security Validations</h3>
            <ul>
              <li><strong>Issuer Validation:</strong> Ensures tokens come from trusted sources</li>
              <li><strong>Audience Validation:</strong> Verifies tokens are intended for this API</li>
              <li><strong>Lifetime Validation:</strong> Checks token expiration timestamps</li>
              <li><strong>Signing Key Validation:</strong> Confirms token signature integrity</li>
            </ul>
            <div className="highlight">
              <p>
                JWT provides stateless authentication, enabling horizontal scaling without session storage.
              </p>
            </div>
          </div>
        );

      case 'swagger':
        return (
          <div className="content-section">
            <h2>Swagger Configuration</h2>
            <p>
              Swagger provides interactive API documentation and testing capabilities. This configuration 
              integrates JWT Bearer authentication into Swagger UI, allowing you to test protected endpoints.
            </p>

            <h3>Complete Swagger Setup with JWT</h3>
            <p>Add the following configuration to your <span className="inline-code">Program.cs</span> file:</p>
            
            <div className="code-block">
              <pre>{`builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("Bearer", new Microsoft.OpenApi.Models.OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = Microsoft.OpenApi.Models.SecuritySchemeType.Http,
        Scheme = "bearer",
        BearerFormat = "JWT",
        In = Microsoft.OpenApi.Models.ParameterLocation.Header,
        Description = "JWT Authorization header using the Bearer scheme."
    });

    options.AddSecurityRequirement(new Microsoft.OpenApi.Models.OpenApiSecurityRequirement
    {
        {
            new Microsoft.OpenApi.Models.OpenApiSecurityScheme
            {
                Reference = new Microsoft.OpenApi.Models.OpenApiReference
                {
                    Type = Microsoft.OpenApi.Models.ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            Array.Empty<string>()
        }
    });
});`}</pre>
            </div>

            <h3>Configuration Breakdown</h3>
            
            <h4>Security Definition</h4>
            <ul>
              <li><strong>Name:</strong> "Authorization" - The header name where the token will be sent</li>
              <li><strong>Type:</strong> Http - Specifies HTTP authentication scheme</li>
              <li><strong>Scheme:</strong> "bearer" - Uses Bearer token authentication</li>
              <li><strong>BearerFormat:</strong> "JWT" - Indicates the token format</li>
              <li><strong>In:</strong> Header - Token is sent in the request header</li>
            </ul>

            <h4>Security Requirement</h4>
            <p>
              The <span className="inline-code">AddSecurityRequirement</span> method applies the Bearer authentication 
              globally to all endpoints in Swagger UI. This adds the "Authorize" button to the Swagger interface.
            </p>

            <h3>Enable Swagger Middleware</h3>
            <p>Add these lines to enable Swagger in your application pipeline:</p>
            <div className="code-block">
              <pre>{`if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
        c.RoutePrefix = "swagger";
    });
}`}</pre>
            </div>

            <h3>Using Swagger with JWT</h3>
            
            <h4><span className="step-number">1</span>Obtain JWT Token</h4>
            <p>First, call your login endpoint to get a JWT token:</p>
            <div className="code-block">
              <pre>{`POST /api/auth/login
{
  "username": "admin@example.com",
  "password": "Admin@123"
}

Response:
{
  "error": false,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}`}</pre>
            </div>

            <h4><span className="step-number">2</span>Authorize in Swagger</h4>
            <div className="info-box">
              <p>
                Click the <strong>"Authorize"</strong> button at the top of Swagger UI, 
                paste your token (without "Bearer" prefix), and click "Authorize". 
                All subsequent requests will include the JWT token automatically.
              </p>
            </div>

            <h4><span className="step-number">3</span>Test Protected Endpoints</h4>
            <p>
              Now you can test any protected endpoint. Swagger will automatically include the 
              Authorization header with your JWT token in all requests.
            </p>

            <div className="warning-box">
              <p>
                <strong>Important:</strong> Only enable Swagger in development environments. 
                For production, remove or secure the Swagger endpoint to prevent exposing your API structure.
              </p>
            </div>
          </div>
        );

      case 'authorization':
        return (
          <div className="content-section">
            <h2>Role-Based Authorization</h2>
            <p>
              Role-based access control restricts endpoint access based on user roles such as Admin or User. 
              This ensures proper separation of concerns and security boundaries.
            </p>
            <div className="code-block">
              <pre>{`[Authorize(Roles = "Admin")]
[HttpPost]
public IActionResult CreateProduct(Product product)
{
    // Only users with Admin role can access this endpoint
    _context.Products.Add(product);
    _context.SaveChanges();
    
    return Ok(new ApiResponse<Product>
    {
        Error = false,
        Message = "Product created successfully",
        Data = product
    });
}`}</pre>
            </div>
            <h3>Authorization Features</h3>
            <ul>
              <li>Attribute-based role enforcement</li>
              <li>Multiple role support per endpoint</li>
              <li>Automatic 401/403 responses for unauthorized access</li>
              <li>Claims-based identity integration</li>
              <li>Policy-based authorization support</li>
            </ul>
          </div>
        );

      case 'crud':
        return (
          <div className="content-section">
            <h2>CRUD Operations</h2>
            <p>
              The API provides full Create, Read, Update, and Delete functionality using standardized responses. 
              All operations follow RESTful conventions and return consistent ApiResponse wrappers.
            </p>
            <div className="code-block">
              <pre>{`[HttpGet]
public IActionResult GetAll()
{
    var products = _context.Products.ToList();
    
    return Ok(new ApiResponse<List<Product>>
    {
        Error = false,
        Message = "Operation Successful",
        Data = products
    });
}

[HttpGet("{id}")]
public IActionResult GetById(int id)
{
    var product = _context.Products.Find(id);
    
    if (product == null)
    {
        return NotFound(new ApiResponse<Product>
        {
            Error = true,
            Message = "Product not found",
            Data = null
        });
    }
    
    return Ok(new ApiResponse<Product>
    {
        Error = false,
        Message = "Product retrieved successfully",
        Data = product
    });
}`}</pre>
            </div>
            <h3>Supported Operations</h3>
            <ul>
              <li><strong>GET:</strong> Retrieve single or multiple resources</li>
              <li><strong>POST:</strong> Create new resources</li>
              <li><strong>PUT:</strong> Update existing resources</li>
              <li><strong>DELETE:</strong> Remove resources</li>
            </ul>
          </div>
        );

      case 'endpoints':
        return (
          <div className="content-section">
            <h2>API Endpoints</h2>
            <p>
              Complete reference of all available API endpoints with request/response examples.
            </p>

            <h3>Authentication Endpoints</h3>
            
            <div className="endpoint-card">
              <div>
                <span className="endpoint-method method-post">POST</span>
                <span className="endpoint-path">/api/auth/register</span>
              </div>
              <p style={{marginTop: '0.75rem', marginBottom: '0.5rem'}}>Register a new user account</p>
              <div className="code-block">
                <pre>{`Request Body:
{
  "username": "user@example.com",
  "password": "User@123",
  "role": "User"
}

Response:
{
  "error": false,
  "message": "User registered successfully",
  "data": {
    "id": 1,
    "username": "user@example.com",
    "role": "User"
  }
}`}</pre>
              </div>
            </div>

            <div className="endpoint-card">
              <div>
                <span className="endpoint-method method-post">POST</span>
                <span className="endpoint-path">/api/auth/login</span>
              </div>
              <p style={{marginTop: '0.75rem', marginBottom: '0.5rem'}}>Authenticate and receive JWT token</p>
              <div className="code-block">
                <pre>{`Request Body:
{
  "username": "user@example.com",
  "password": "User@123"
}

Response:
{
  "error": false,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiration": "2024-12-31T23:59:59Z"
  }
}`}</pre>
              </div>
            </div>

            <h3>Product Endpoints</h3>

            <div className="endpoint-card">
              <div>
                <span className="endpoint-method method-get">GET</span>
                <span className="endpoint-path">/api/products</span>
              </div>
              <p style={{marginTop: '0.75rem', marginBottom: '0.5rem'}}>Get all products</p>
              <div className="code-block">
                <pre>{`Response:
{
  "error": false,
  "message": "Operation successful",
  "data": [
    {
      "id": 1,
      "name": "Product 1",
      "price": 99.99,
      "description": "Product description"
    }
  ]
}`}</pre>
              </div>
            </div>

            <div className="endpoint-card">
              <div>
                <span className="endpoint-method method-get">GET</span>
                <span className="endpoint-path">{`/api/products/{id}`}</span>
              </div>
              <p style={{marginTop: '0.75rem', marginBottom: '0.5rem'}}>Get product by ID</p>
              <div className="code-block">
                <pre>{`Response:
{
  "error": false,
  "message": "Product retrieved successfully",
  "data": {
    "id": 1,
    "name": "Product 1",
    "price": 99.99,
    "description": "Product description"
  }
}`}</pre>
              </div>
            </div>

            <div className="endpoint-card">
              <div>
                <span className="endpoint-method method-post">POST</span>
                <span className="endpoint-path">/api/products</span>
                <span style={{marginLeft: '0.5rem', fontSize: '0.85rem', color: '#dc2626'}}>🔒 Admin Only</span>
              </div>
              <p style={{marginTop: '0.75rem', marginBottom: '0.5rem'}}>Create a new product</p>
              <div className="code-block">
                <pre>{`Request Body:
{
  "name": "New Product",
  "price": 149.99,
  "description": "Product description"
}

Response:
{
  "error": false,
  "message": "Product created successfully",
  "data": {
    "id": 2,
    "name": "New Product",
    "price": 149.99,
    "description": "Product description"
  }
}`}</pre>
              </div>
            </div>

            <div className="endpoint-card">
              <div>
                <span className="endpoint-method method-put">PUT</span>
                <span className="endpoint-path">{`/api/products/{id}`}</span>
                <span style={{marginLeft: '0.5rem', fontSize: '0.85rem', color: '#dc2626'}}>🔒 Admin Only</span>
              </div>
              <p style={{marginTop: '0.75rem', marginBottom: '0.5rem'}}>Update an existing product</p>
              <div className="code-block">
                <pre>{`Request Body:
{
  "name": "Updated Product",
  "price": 199.99,
  "description": "Updated description"
}

Response:
{
  "error": false,
  "message": "Product updated successfully",
  "data": {
    "id": 1,
    "name": "Updated Product",
    "price": 199.99,
    "description": "Updated description"
  }
}`}</pre>
              </div>
            </div>

            <div className="endpoint-card">
              <div>
                <span className="endpoint-method method-delete">DELETE</span>
                <span className="endpoint-path">{`/api/products/{id}`}</span>
                <span style={{marginLeft: '0.5rem', fontSize: '0.85rem', color: '#dc2626'}}>🔒 Admin Only</span>
              </div>
              <p style={{marginTop: '0.75rem', marginBottom: '0.5rem'}}>Delete a product</p>
              <div className="code-block">
                <pre>{`Response:
{
  "error": false,
  "message": "Product deleted successfully",
  "data": null
}`}</pre>
              </div>
            </div>

            <div className="info-box">
              <p>
                <strong>Note:</strong> Endpoints marked with 🔒 require authentication and specific roles. 
                Include the JWT token in the Authorization header: <span className="inline-code">Bearer {'{token}'}</span>
              </p>
            </div>
          </div>
        );

      case 'error-handling':
        return (
          <div className="content-section">
            <h2>Error Handling</h2>
            <p>
              The API implements comprehensive error handling to provide clear, actionable error messages 
              to clients while maintaining security best practices.
            </p>

            <h3>Standard Error Response</h3>
            <p>All errors follow the same ApiResponse structure:</p>
            <div className="code-block">
              <pre>{`{
  "error": true,
  "message": "Descriptive error message",
  "data": null
}`}</pre>
            </div>

            <h3>HTTP Status Codes</h3>
            <div className="table-container">
              <table className="doc-table">
                <thead>
                  <tr>
                    <th>Status Code</th>
                    <th>Meaning</th>
                    <th>When Used</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="inline-code">200 OK</span></td>
                    <td>Success</td>
                    <td>Request completed successfully</td>
                  </tr>
                  <tr>
                    <td><span className="inline-code">201 Created</span></td>
                    <td>Resource Created</td>
                    <td>New resource created successfully</td>
                  </tr>
                  <tr>
                    <td><span className="inline-code">400 Bad Request</span></td>
                    <td>Invalid Input</td>
                    <td>Validation errors or malformed request</td>
                  </tr>
                  <tr>
                    <td><span className="inline-code">401 Unauthorized</span></td>
                    <td>Not Authenticated</td>
                    <td>Missing or invalid JWT token</td>
                  </tr>
                  <tr>
                    <td><span className="inline-code">403 Forbidden</span></td>
                    <td>Not Authorized</td>
                    <td>User lacks required role/permissions</td>
                  </tr>
                  <tr>
                    <td><span className="inline-code">404 Not Found</span></td>
                    <td>Resource Not Found</td>
                    <td>Requested resource doesn't exist</td>
                  </tr>
                  <tr>
                    <td><span className="inline-code">500 Internal Server Error</span></td>
                    <td>Server Error</td>
                    <td>Unexpected server-side error</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Common Error Scenarios</h3>

            <h4>Validation Error (400)</h4>
            <div className="code-block">
              <pre>{`{
  "error": true,
  "message": "Validation failed",
  "data": {
    "errors": {
      "Name": ["The Name field is required."],
      "Price": ["Price must be greater than 0."]
    }
  }
}`}</pre>
            </div>

            <h4>Authentication Error (401)</h4>
            <div className="code-block">
              <pre>{`{
  "error": true,
  "message": "Invalid credentials",
  "data": null
}`}</pre>
            </div>

            <h4>Authorization Error (403)</h4>
            <div className="code-block">
              <pre>{`{
  "error": true,
  "message": "You do not have permission to perform this action",
  "data": null
}`}</pre>
            </div>

            <h4>Not Found Error (404)</h4>
            <div className="code-block">
              <pre>{`{
  "error": true,
  "message": "Product not found",
  "data": null
}`}</pre>
            </div>

            <h3>Global Exception Handler</h3>
            <p>Implement a global exception handler in <span className="inline-code">Program.cs</span>:</p>
            <div className="code-block">
              <pre>{`app.UseExceptionHandler(errorApp =>
{
    errorApp.Run(async context =>
    {
        context.Response.StatusCode = 500;
        context.Response.ContentType = "application/json";

        var error = context.Features.Get<IExceptionHandlerFeature>();
        if (error != null)
        {
            var response = new ApiResponse<object>
            {
                Error = true,
                Message = "An unexpected error occurred",
                Data = null
            };

            await context.Response.WriteAsJsonAsync(response);
        }
    });
});`}</pre>
            </div>

            <div className="warning-box">
              <p>
                <strong>Security Note:</strong> Never expose sensitive error details (like stack traces or 
                database connection strings) in production. Log detailed errors server-side only.
              </p>
            </div>
          </div>
        );

      case 'summary':
        return (
          <div className="content-section">
            <h2>Architecture Summary</h2>
            <p>
              This implementation provides a complete, production-ready foundation for building secure 
              and scalable web APIs with ASP.NET Core.
            </p>
            <div className="feature-grid">
              <div className="feature-card">
                <h4>🗄️ Entity Framework Core</h4>
                <p>SQL Server integration with type-safe queries</p>
              </div>
              <div className="feature-card">
                <h4>🔐 JWT Authentication</h4>
                <p>Secure API access with token validation</p>
              </div>
              <div className="feature-card">
                <h4>👥 Role-Based Authorization</h4>
                <p>Endpoint protection with user roles</p>
              </div>
              <div className="feature-card">
                <h4>📦 Standardized Responses</h4>
                <p>ApiResponse wrapper for consistency</p>
              </div>
              <div className="feature-card">
                <h4>⚙️ Full CRUD</h4>
                <p>Complete data manipulation operations</p>
              </div>
              <div className="feature-card">
                <h4>📚 Swagger Support</h4>
                <p>Interactive API testing and documentation</p>
              </div>
            </div>
            <div className="highlight">
              <p>
                <strong>Ready for Production:</strong> This architecture follows industry best practices 
                and is designed to scale with your application needs.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return <main className="content">{renderContent()}</main>;
};

export default Content;
