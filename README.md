# Trabalho-Web-SCC0219

## Project Report
Jhonathan Oliveira Alves - NUSP 11838116  
Lucas Massao Fukusawa Dagnone - NUSP  11295810

### 1. Requirements
* The system must have 2 types of users: Clients and Administrators
  * Administrators are responsible for registering/managing administrators, customers, and products/services provided. The application already comes with an account admin with password admin.
  * Customers are users who access the system to buy products/services.
* The admin record includes, at least: name, id, phone, email.
* Each customer's record includes, at least: name, id, address, phone, email
* Product/services records include, at least: name, id, photo, description, price, quantity (in stock), quantity sold.
* The store sells products, in this case, clothes.
* Selling Products (or services): Products are selected, their quantity chosen, and are included in a cart. Products are purchased using a credit card number (any number is accepted by the system). The quantity of product sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers.
* Product/Service Management: Administrators can create/update/read/delete (crud) new products and services. For example, they can change the stock quantity.
* Your functionality: Create a functionality that is specific to your application. It does not have to be something complicated. For instance, if you are selling cars, you may allow users to use an accelerator to hear how each car engine roars up and down.   
* The system must provide accessibility requirements and provide good usability. The system must be responsive, meaning that it should complete assigned tasks within a reasonable time.

* As an extra functionality there will be a search bar for finding products in the website.




### 2. Project Description
* The base design of the website was made in figma using material design icons and unsplash images (figma plugins).
* The purpose of the website is to be a clothes store, the user will start at the main menu when entering the website (e.g: www.theclothesstore.com) and will  be able to move through the site via the top bar, by clicking on itens or by adding to cart, the top bar will work in all pages of the website and will redirect through the icon(top left) to the main page, the search bar will result in a search on the list of itens on the shopping page, and finally the two top icons will redirect to the shopping cart or the user account. 
* As a method of navigating the website we will be implementing a simple categories list dividing clothes by type and sex.
* Both admin and user will login through the same page.
* There will be a base admin account which user/product management can be done.
* The project design can be viewed in figma on this link: https://www.figma.com/file/MnyLYe5yCZLxmz1epT5qTI/Trabalho-Web-SCC0219?node-id=0%3A1 
or as a slide show https://www.figma.com/proto/MnyLYe5yCZLxmz1epT5qTI/Trabalho-Web-SCC0219?node-id=0%3A1&scaling=min-zoom&page-id=0%3A1
* Drawio diagram of the website:
  * Note, the top bar will me visible in every page.

![drawioTheClothesStore](https://user-images.githubusercontent.com/48655370/195652798-f148bcf5-39b5-4a26-b0c6-6f563f9ca940.png)

### 3. Comments About the Code
App.jsx is the root archive of the project, we have divided the code in smaller components for each specific item, each one with it's own css file, we divided the Client side and Server side into two folders.
### 4. Test Plan
We didn't used any test tool.
### 5. Test Results
From inspecting the pages manually the pages looks manually and most functionalities seem to be working.
### 6. Build Procedures
To run the project after Milestone 3 it's necessary to have a react installation and run the following command on your project folder with package.json,
 * npm install

After that run in the Client folder
 * npm start 
Then run in the Server folder
 * npm run dev

The project should be running on: localhost:3000/

### 7. Problems
There are some problems as in the functionality of the website and the organization of the code, there is a lack of logout button for the user and too many css files.
### 8. Comments
No comment to be made.
