interface BlogPost {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  guid: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  link: string;
  author: number;
  jetpack_featured_media_url: string;

  // embedded data
  _embedded?: {
    author?: {
      name: string;
      }[];
  };
}

export type { BlogPost };
