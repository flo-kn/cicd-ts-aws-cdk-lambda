FROM public.ecr.aws/lambda/nodejs:20

# Copy the compiled JS file and any other necessary files
COPY index.js /var/task/

# Set the default handler function
CMD ["index.handler"]
