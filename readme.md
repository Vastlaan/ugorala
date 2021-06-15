# NextJs client + Strapi API + Custom CMS Admin Panel (also NextJs) driven by Docker and Kubernetes

This project is my private pet project, which tries to configure webapplication - in this case Restaurant website - together with STRAPI headless CMS and cutom made CMS Admin Panel build especially for customer (potential buyer of this project) to update website content.

**Whole project is working in Docker/Kubernetes environment.**

This project is in development and not yet ready for prodution, althoug **it is being configured to run in production kubernetes cluster** somwhere in the cloud. 

The **development environment** makes use of **docker compose** utility.


# Structure

Project configures three separate applications:

**Client**

NextJs application running restaurant webapp
Accessible via Ingress 
Getting content from Strapi

**Strapi**

Strapi headless CMS instance configured with fields to be used in the Client
Not Accessible via Ingress, only to be configured in dev mode

**Admin**

Protected NextJs application. Only logged in user (authorized via Strapi JWT token) can access the UI.
This is actually admin panel to update or create (so not delete) website content. 
It is meant to served as more friendly interface to use for non-technicall person. Also because you cannot delete content.

Getting, updating or creating content from Strapi.

# License

So far I stick to the defalut copyright laws , meaning that I retain all rights to my source code.