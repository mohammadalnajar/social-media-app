const sortPostsByDate = (posts) =>
    posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

export default sortPostsByDate;
