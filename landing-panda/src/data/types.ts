interface BlogPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  guid: {
    rendered: string;
  }
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  link:string
  // add other fields you care about
}

export type { BlogPost };
