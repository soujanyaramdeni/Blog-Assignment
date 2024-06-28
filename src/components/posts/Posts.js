//src/components/Posts.js
import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Post img="https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <Post img="https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post img="https://th.bing.com/th/id/OIP.IDq8cZVcGfgwgkR1Bt0RywHaEo?w=340&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
      <Post img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post img="https://th.bing.com/th/id/OIP.tPIDYAUjmtvrqkpPcuFbcQAAAA?w=256&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
    </div>
  );
}