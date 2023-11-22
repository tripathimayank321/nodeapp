Template Engines (ejs)- Ek Markup style jo baad me convert hota h html me jisme dynamic cheezein daal sakte hain

To setup EJS

1.make views folder 2. // set the view engine to ejs
app.set("view engine", "ejs");

3. Just use it.

For Static files, we need public folder and inside this, Images, stylesheets and frontend
Tell Express to use static and give public path..

app.use(express.static("./public)); // Makes public as base and we can use its file for ejs now.

// Error handling in Express
