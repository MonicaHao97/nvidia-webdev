# NVIDIA Web Development Project

A SPA that functions like a simplified version of OfferUp,

## Description

This website has four pages:
* **Home Page**: Allows user to view all avaliable posts, search, or create a post using search and post buttons.
* **Results Page**: Appears after searching, displays all matched results. Allows users to filter reuslts by two dropdowns: Price and Condition.
* **Detials Page**: Each post in Home page and Results page are clickable and will direct user to Details Page which contains more information about the post.
                    Has a Go Back button to head back to either Home or Results page based on history.
* **Post Page**: Can be accessed only by clicking the add new post button in home page. Allows users to fill a form for their sales. 
                  Supports uploading multiple images at a time. Will redirect users back to Home page after submitting the form.
## Getting Started

### Installing

1. Pull the whole repository to your Laptop.
2. Go to **nvidia-client** and **nvidia-server** then run ``` npm install ``` under both directories.

### Executing program

1. First go to **nvidia-server** then run ``` npm start ```
2. Then go to **nvidia-client** and run ``` npm start ```
3. Wait for a few seconds then the website should show up in your browser.

## Demo

### Home Page
* Default Home Page View
<img width="1251" alt="HomePage" src="https://user-images.githubusercontent.com/72895924/141521697-30d41ed2-b331-4434-86cc-67209e7d376e.png">

* After Submitting a New Post
<img width="1280" alt="NewHome" src="https://user-images.githubusercontent.com/72895924/141522244-a5453d64-ed57-4fe0-8c93-15708d400206.png">

### Post Page
* Default Post Page View
<img width="1280" alt="AddPost" src="https://user-images.githubusercontent.com/72895924/141522005-7fd041f5-b3e0-4632-8b09-23430d2cf723.png">

* Upload Multiple Images (First image uploaded will become thumbnail in Home Pgae)
<img width="1280" alt="AddPostImage" src="https://user-images.githubusercontent.com/72895924/141522100-ff716367-1f05-4e29-8178-b0e666181097.png">

### Results Page
* Search Results for Iphone
<img width="1280" alt="SearchIphone" src="https://user-images.githubusercontent.com/72895924/141522469-40c4cc00-377c-4f6c-8241-47efd076b9b6.png">

#### Filter Results
* Filter Results by Price (below $50 and greater than $100 here)
<img width="1280" alt="FilterOne" src="https://user-images.githubusercontent.com/72895924/141522582-5f90113f-1ff9-481f-bec6-fb5a40a523b6.png">
<img width="1280" alt="FilterTwo" src="https://user-images.githubusercontent.com/72895924/141522590-72656c0f-2ceb-4a98-9a2d-5c5922b1c4cd.png">

* Clear Filter by Set to Default Value
<img width="1280" alt="ClearFilter" src="https://user-images.githubusercontent.com/72895924/141522689-1fdc5648-ce99-42ed-aa55-2f4e1fc8a99f.png">

* Same Thing for Condition Filter (New and Old here)
<img width="1280" alt="Condition Filter One" src="https://user-images.githubusercontent.com/72895924/141522892-c845bcbc-541c-42ea-9814-44295535a573.png">
<img width="1280" alt="Condition Filter Two" src="https://user-images.githubusercontent.com/72895924/141522908-3ac22ff3-0dd1-40e4-8530-0e663f4a1d9c.png">

* No Results if Filters Do Not Match Any Post
<img width="1280" alt="ConditionFilterClear" src="https://user-images.githubusercontent.com/72895924/141522920-ac6eb9b7-e46d-4def-9bd1-99ee1c31b4de.png">

### Details Page
* Details Page Contains More Information and Displays All Images Uploaded by Order
<img width="1280" alt="DetailsImage" src="https://user-images.githubusercontent.com/72895924/141523356-24f93b37-5fe5-46f6-8a36-aa4c3d3eca9f.png">

## Possible Improvements
* Authentification Systems (Sign-up/Log-in)
* Allow Registered Users to Bookmark Posts
* Edit/Delete/Comment on a Post
* Styling (ex. add banner/navigation menu in Home Pgae)

## Author

Yongxian (Monica) Hao </br>
Contact Info: monicahao97@gmail.com
