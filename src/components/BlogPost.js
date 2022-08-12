import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";

function BlogPost() {
  return (
    <div id="blog-post">
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
      <Comment commentText="I agree with this statement. - Angela Merkel" />
      <Comment commentText="A universal truth. - Noam Chomsky" />
      <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />
    </div>
  );
}

export default BlogPost;


// function BlogPost(){
//   return(
//     <div>
//       <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
//     </div>
//   )
// }

// function ParentComponent(){
//   return <ChildComponent text="Hello!" number={2}/>
// }

// function ChildComponent(props){

//   return(
//     <div>
//       {props.text} {props.number}
//     </div>
//   )
// }


//PARENT COMPONENT 
function BlogPost(){
  return(
    <div>
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." 
      isPublished={true}
      minutesToRead={1}
      //note for props that are strings, we dont need to place curly braces around the values; for other data types (numbers, booleans, objects) we need currly braces.
      
      />

    </div>
  )
}

function BlogContent(props){
  return <div>{props.articleText}</div>
}

function BlogContent(props){
  console.log(props)

  if(!props.isPublished){
    return null;
  }else {
    return(
      <div>
        <h1>{props.articleText}</h1>
        <p>{props.minutesToRead}</p>
      </div>
    )
  }
}

function Comment(props){
  return <div>props.commentText</div>
}

function BlogPost(){
  return(
    <div>
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
      <Comment commentText="I agree with this statement. -Angela Merkel" />
      <Comment commentText="A universal truth. - Noam Chomsky" />
      <Comment commentText="Truth is singular. Its versions are mistruths. -Sonmi-451" />
    </div>
  )
}