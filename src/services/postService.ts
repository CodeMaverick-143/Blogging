import type { BlogPost } from '../types';

// Expanded MOCK_POSTS array
const MOCK_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Exploring the Hidden Gems of Paris",
    content: `Paris, the City of Light, holds countless secrets waiting to be discovered beyond the iconic Eiffel Tower and Louvre Museum. This guide explores charming neighborhoods and lesser-known attractions. Le Marais's hidden courtyards offer glimpses into the city's aristocratic past. Canal Saint-Martin is a trendy neighborhood with hip cafes and boutiques. Rue Crémieux boasts photogenic pastel-colored houses. Visit markets like Marché des Enfants Rouges for authentic food experiences and explore Belleville for street art.`,
    excerpt: "Discover the lesser-known attractions and local favorites in the City of Light...",
    author: "Priya Sharma",
    date: "2024-03-15",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["Paris", "Travel", "Culture", "Europe"]
  },
  {
    id: "2",
    title: "A Food Lover's Guide to Tokyo",
    content: `Tokyo's culinary scene blends tradition and innovation. Tsukiji Outer Market offers fresh seafood and snacks. Shibuya boasts modern dining, from conveyor belt sushi to themed cafes. Explore hidden izakayas in Golden Gai or Omoide Yokocho for authentic experiences like yakitori and sashimi. Try a standing sushi bar, visit depachika (department store food halls), and sample street food at Ameyoko Market.`,
    excerpt: "From street food to Michelin stars, experience the best of Tokyo's culinary scene...",
    author: "Kenji Tanaka",
    date: "2024-03-14",
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    tags: ["Tokyo", "Food", "Travel", "Japan", "Asia"]
  },
  {
    id: "3",
    title: "Mastering Remote Work: Productivity & Balance",
    content: `Working remotely requires discipline. Establish a dedicated workspace and maintain regular hours. Use tools like task managers (Todoist, Asana) and communication platforms (Slack, Zoom). Prioritize tasks using methods like the Eisenhower Matrix. Take regular breaks to avoid burnout – try the Pomodoro Technique. Set clear boundaries between work and personal life. Stay connected with colleagues through virtual coffee breaks or team chats.`,
    excerpt: "Tips and strategies for staying productive and maintaining well-being while working remotely...",
    author: "Aisha Khan",
    date: "2024-03-12",
    imageUrl: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    tags: ["Remote Work", "Productivity", "Lifestyle", "Well-being"]
  },
   {
    id: "4",
    title: "The Art of Minimalist Living",
    content: `Minimalism is about making room for what matters. Start by decluttering using the KonMari method—keep only what sparks joy. Apply the 90/90 rule: have you used it in 90 days, will you use it in the next 90? Practice the 'one in, one out' rule to prevent accumulation. Digital minimalism is also key: unsubscribe from emails, organize files, limit social media. Benefits include less stress, more time, and better financial health.`,
    excerpt: "Learn how to declutter your life and find joy in simplicity...",
    author: "David Chen",
    date: "2024-03-10",
    imageUrl: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
    tags: ["Minimalism", "Lifestyle", "Wellness", "Simplicity"]
  },
  {
    id: "5",
    title: "Beginner's Guide to Astrophotography",
    content: `Capture the night sky! You'll need a DSLR or mirrorless camera with manual controls, a sturdy tripod, and ideally a wide-angle lens with a fast aperture (e.g., f/2.8). Start with the Moon – it's bright and easy. For stars, use manual focus (focus on a bright star using live view), set a wide aperture, high ISO (1600-6400), and experiment with shutter speeds (15-30 seconds) using the 500 rule (500 / focal length = max shutter speed) to avoid star trails. Shoot in RAW for better post-processing.`,
    excerpt: "Learn the basics of capturing stunning images of the night sky...",
    author: "Elena Petrova",
    date: "2024-03-08",
    imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    tags: ["Photography", "Astrophotography", "Space", "Tutorial", "Hobby"]
  },
  {
    id: "6",
    title: "Sustainable Gardening in Urban Spaces",
    content: `Even small spaces like balconies or patios can host a garden. Use containers or vertical planters. Choose plants suited to your light conditions. Practice companion planting to deter pests naturally. Water wisely, preferably in the morning, using rainwater if possible. Create your own compost from kitchen scraps. Choose organic fertilizers and pest control methods. Attract beneficial insects like bees and ladybugs with specific flowers.`,
    excerpt: "Tips for creating an eco-friendly garden, even in the city...",
    author: "Marcus Green",
    date: "2024-03-05",
    imageUrl: "https://images.unsplash.com/photo-1593096608968-3599340157abba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["Gardening", "Sustainability", "Urban Living", "Eco-friendly", "DIY"]
  },
  {
    id: "7",
    title: "Introduction to Mediterranean Cooking",
    content: `Healthy and flavorful! Focus on fresh vegetables, fruits, whole grains, legumes, nuts, seeds, and olive oil. Use herbs and spices generously instead of salt. Fish and seafood are preferred proteins, eaten several times a week. Poultry, eggs, and dairy are consumed in moderation. Red meat is infrequent. Enjoy meals socially! Simple recipes include Greek salad, hummus, lentil soup, and grilled fish with lemon and herbs.`,
    excerpt: "Explore the healthy and delicious world of Mediterranean cuisine...",
    author: "Isabella Rossi",
    date: "2024-03-02",
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    tags: ["Cooking", "Food", "Healthy Eating", "Mediterranean", "Recipe"]
  },
  {
    id: "8",
    title: "The Rise of Electric Vehicles",
    content: `EVs are transforming transportation. Key benefits include lower running costs (electricity vs. gasoline, less maintenance), zero tailpipe emissions, and a quieter driving experience. Battery technology is rapidly improving, increasing range and reducing charging times. Governments offer incentives to encourage adoption. Challenges remain, such as charging infrastructure availability and initial purchase price, but the trend towards electrification is clear.`,
    excerpt: "Understanding the impact and future of electric cars...",
    author: "Alex Thompson",
    date: "2024-02-28",
    imageUrl: "https://images.unsplash.com/photo-1581967002570-1cac57ba39b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["Technology", "EV", "Sustainability", "Cars", "Future"]
  },
  {
    id: "9",
    title: "Mindfulness Meditation for Beginners",
    content: `Mindfulness means paying attention to the present moment without judgment. Find a quiet place, sit comfortably. Close your eyes or soften your gaze. Focus on your breath – the sensation of air entering and leaving your body. When your mind wanders (it will!), gently acknowledge the thought and return your focus to the breath. Start with short sessions (5-10 minutes) daily. Apps like Headspace or Calm can guide you. Benefits include stress reduction and improved focus.`,
    excerpt: "A simple guide to starting your mindfulness meditation practice...",
    author: "Dr. Evelyn Reed",
    date: "2024-02-25",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80",
    tags: ["Mindfulness", "Meditation", "Wellness", "Mental Health", "Beginner"]
  },
  {
    id: "10",
    title: "Understanding Blockchain Technology",
    content: `Blockchain is a decentralized, distributed, and immutable ledger. Think of it as a shared digital notebook where transactions are recorded in blocks. Each block is cryptographically linked to the previous one, forming a chain. This makes the data tamper-proof. Decentralization means no single entity controls it. While famous for cryptocurrencies like Bitcoin, blockchain has applications in supply chain management, voting systems, and digital identity.`,
    excerpt: "Demystifying the core concepts behind blockchain technology...",
    author: "Ben Carter",
    date: "2024-02-20",
    imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    tags: ["Technology", "Blockchain", "Crypto", "Decentralization", "Innovation"]
  }
];

class PostService {
  private posts: BlogPost[] = [...MOCK_POSTS];

  getAllPosts(): BlogPost[] {
    // Simulate fetching delay
    // await new Promise(resolve => setTimeout(resolve, 500));
    return [...this.posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort by date descending
  }

  getPostById(id: string): BlogPost | undefined {
    return this.posts.find(post => post.id === id);
  }

  createPost(post: Omit<BlogPost, 'id' | 'date'>): BlogPost {
    const newPost: BlogPost = {
      ...post,
      id: Date.now().toString(), // Simple unique ID generation
      date: new Date().toISOString().split('T')[0], // Set current date
    };
    this.posts.unshift(newPost); // Add to the beginning of the array
    return newPost;
  }

  updatePost(id: string, postData: Partial<Omit<BlogPost, 'id'>>): BlogPost | undefined {
    const index = this.posts.findIndex(p => p.id === id);
    if (index === -1) return undefined;

    const updatedPost: BlogPost = {
      ...this.posts[index],
      ...postData,
      id // Ensure ID remains unchanged
    };
    this.posts[index] = updatedPost;
    return updatedPost;
  }

  deletePost(id: string): boolean {
    const initialLength = this.posts.length;
    this.posts = this.posts.filter(post => post.id !== id);
    return this.posts.length < initialLength;
  }

  searchPosts(query: string): BlogPost[] {
    if (!query) return this.getAllPosts(); // Return all if query is empty

    const lowercaseQuery = query.toLowerCase();
    return this.posts.filter(post =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(lowercaseQuery)) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.author.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort results
  }
}

export const postService = new PostService(); 