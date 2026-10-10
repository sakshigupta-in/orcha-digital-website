# Test Credentials
# Agent writes here when creating/modifying auth credentials (admin accounts, test users).
# Testing agent reads this before auth tests. Fork/continuation agents read on startup.

## Orcha Digital
No authentication in this app. The site is fully public.
Enquiry API: POST {REACT_APP_BACKEND_URL}/api/enquiries (name, email, service, message required; phone, package optional).
List saved enquiries: GET {REACT_APP_BACKEND_URL}/api/enquiries
