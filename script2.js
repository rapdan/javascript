// Cwiczenie 6
// funkcja lorem(n) zwraca podaną ilość znaków ze znanego łacińskiego cytatu: Lorem ipsum...
// let lorem_str = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quam iusto deleniti ea quia. Harum non debitis quam incidunt perferendis temporibus soluta nihil esse voluptate quaerat quis quae tenetur delectus ut, nisi mollitia illum iste, pariatur consectetur neque! Illum accusantium reprehenderit magni culpa! Molestias quae hic veritatis dolore sit distinctio quam sapiente veniam sequi earum tempore ipsum recusandae, accusamus quas ex consectetur deleniti mollitia consequatur eligendi reprehenderit pariatur doloremque officia blanditiis est. Id quisquam quam cum blanditiis vel deleniti molestiae odio distinctio dolorum ipsum! Esse, sequi adipisci numquam harum, impedit velit fugit nihil exercitationem optio amet incidunt laudantium recusandae sed";

// function lorem(n) {
//     return lorem_str.slice(0, n);
// }
// lub ===============================================
// const lorem = n => "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quam iusto deleniti ea quia. Harum non debitis quam incidunt perferendis temporibus soluta nihil esse voluptate quaerat quis quae tenetur delectus ut, nisi mollitia illum iste, pariatur consectetur neque! Illum accusantium reprehenderit magni culpa! Molestias quae hic veritatis dolore sit distinctio quam sapiente veniam sequi earum tempore ipsum recusandae, accusamus quas ex consectetur deleniti mollitia consequatur eligendi reprehenderit pariatur doloremque officia blanditiis est. Id quisquam quam cum blanditiis vel deleniti molestiae odio distinctio dolorum ipsum! Esse, sequi adipisci numquam harum, impedit velit fugit nihil exercitationem optio amet incidunt laudantium recusandae sed".slice(0, n);

//Test:
// console.log(lorem(10));
// console.log(lorem(55));
// console.log(lorem(759));
// console.log("¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤");
// console.log(lorem(1000));