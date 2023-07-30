"use client";

import Container from "@/components/Container";
import Divider from "@/components/Divider";
import BlogHeader from "@/containers/blog-header";
import MainBlog from "@/containers/MainBlog";
import MoreBlogs from "@/containers/MoreBlogs";

const Blog = () => {
  return (
    <Container>
      <BlogHeader />
      <MainBlog />
      <Divider />
      <MoreBlogs />
    </Container>
  );
};

export default Blog;
