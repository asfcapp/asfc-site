// ./sanity/lib/token.ts

export const token =
  'skvWhw3ZHz8vzqOoF3weIUanTfQZmOpOwyRLzYwoejvd7W5dNLjiSaA50gyjaKieaDMspb3GZ0kf9qfj3XqQf5p7IJ7OSROi0km83nredvdVYwL6NtWqLo9LLwxwTgS8JhwkyPTrWRVqEiu7VyeOWQGPeCnlQWiYN35MvppqFgO3IKXlVlNA';

if (!token) {
  throw new Error('Missing SANITY_API_READ_TOKEN');
}
