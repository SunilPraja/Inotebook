# Security Policy

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security vulnerability in the Inotebook project, please report it responsibly.

### How to Report

Please **DO NOT** create public GitHub issues for security vulnerabilities. Instead:

1. **Email us directly** with details about the vulnerability
2. Include:
   - Description of the vulnerability
   - Steps to reproduce (if applicable)
   - Potential impact
   - Suggested fix (if you have one)

3. **Allow time for response** - We will acknowledge your report within 48 hours and work on a fix

### Security Contact

For security issues, please contact the project maintainers directly through GitHub.

## Supported Versions

| Version | Supported |
|---------|-----------|
| Latest  | ✅        |
| < 1.0   | ❌        |

## Security Best Practices

When using Inotebook:

- Keep dependencies updated
- Use environment variables for sensitive configuration
- Never commit secrets or API keys
- Enable two-factor authentication on your GitHub account
- Review code changes before merging to main branch

## Dependency Security

This project uses:
- Node.js dependencies (check `package.json`)
- Regular updates recommended via Dependabot

We use automated tools to detect and address vulnerabilities:
- GitHub Dependabot for dependency scanning
- Secret scanning to prevent credential exposure
- Code scanning for common vulnerabilities

## Acknowledgments

We appreciate all security researchers who responsibly disclose vulnerabilities to us.
