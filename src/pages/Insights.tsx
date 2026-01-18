import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, BookOpen, TrendingUp, ArrowRight, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const insights = [
  {
    type: "Article",
    icon: FileText,
    title: "Understanding Trust Metrics in the Digital Age",
    excerpt: "How businesses can quantify and improve their reputation across platforms. A comprehensive guide to measuring what truly matters.",
    date: "Coming Soon",
    readTime: "8 min read",
    featured: true,
  },
  {
    type: "Case Study",
    icon: BookOpen,
    title: "From Noise to Clarity: A SaaS Growth Story",
    excerpt: "How one startup used data-driven metrics to scale from 1,000 to 50,000 users while maintaining trust and quality.",
    date: "Coming Soon",
    readTime: "12 min read",
    featured: false,
  },
  {
    type: "Insight",
    icon: TrendingUp,
    title: "The Future of Reputation Analytics",
    excerpt: "Emerging trends in how businesses measure and build trust with customers. What to expect in the next five years.",
    date: "Coming Soon",
    readTime: "6 min read",
    featured: false,
  },
  {
    type: "Article",
    icon: FileText,
    title: "Growth Without Vanity: Metrics That Matter",
    excerpt: "Moving beyond surface-level numbers to understand the signals that predict sustainable business growth.",
    date: "Coming Soon",
    readTime: "10 min read",
    featured: false,
  },
  {
    type: "Guide",
    icon: BookOpen,
    title: "Building Your First Trust Dashboard",
    excerpt: "A step-by-step guide to creating a unified view of your business reputation and growth metrics.",
    date: "Coming Soon",
    readTime: "15 min read",
    featured: false,
  },
  {
    type: "Insight",
    icon: TrendingUp,
    title: "Why Ethical Growth Wins Long-Term",
    excerpt: "The data behind sustainable business practices and why authenticity outperforms shortcuts.",
    date: "Coming Soon",
    readTime: "7 min read",
    featured: false,
  },
];

const Insights = () => {
  const featuredPost = insights.find(i => i.featured);
  const regularPosts = insights.filter(i => !i.featured);

  return (
    <Layout enableSnap={true}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black relative overflow-hidden text-white snap-start">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container-max section-padding">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                <span className="text-sm font-medium text-white">Intelligence Center</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
                Insights & Resources
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg sm:text-xl text-white/70 font-light">
                Articles, case studies, and insights about growth, trust, and metrics from the NorthMetriX team. Practical knowledge for data-driven leaders.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-background border-b border-border snap-start">
          <div className="container-max section-padding">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[16/10] rounded-2xl bg-muted border border-border flex items-center justify-center">
                <featuredPost.icon className="w-24 h-24 text-primary/20" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    Featured
                  </span>
                  <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
                    {featuredPost.type}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                  <span>{featuredPost.date}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-24 bg-background snap-start">
        <div className="container-max section-padding">
          <Reveal>
            <h2 className="text-2xl font-bold text-foreground mb-8">All Posts</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <Reveal key={post.title} delay={0.1 * index}>
                <div
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-hover"
                >
                  {/* Type Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <post.icon className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-primary uppercase tracking-wide">
                      {post.type}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-muted snap-start">
        <div className="container-max section-padding text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Get notified when we publish new insights on growth, trust, and metrics. No spam, just valuable content.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link to="/contact">Subscribe to Updates</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
