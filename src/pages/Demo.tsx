import { Home, Briefcase, Building2, FileText, Info, Mail } from 'lucide-react';
import { TubelightNavbar } from "@/components/ui/tubelight-navbar";
import { Layout } from "@/components/layout/Layout";

const Demo = () => {
    const navItems = [
        { name: 'Home', url: '/', icon: Home },
        { name: 'Platform', url: '/platform', icon: FileText },
        { name: 'Services', url: '/services', icon: Briefcase },
        { name: 'Industries', url: '/industries', icon: Building2 },
        { name: 'About', url: '/about', icon: Info },
        { name: 'Contact', url: '/contact', icon: Mail }
    ];

    return (
        <Layout>
            <TubelightNavbar items={navItems} />

            <section className="pt-32 pb-20 min-h-screen bg-gradient-hero relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                </div>

                <div className="relative container-max section-padding">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <span className="text-sm font-medium text-primary">Demo</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-soft-gray mb-6">
                            Tubelight Navbar Demo
                        </h1>

                        <p className="text-lg sm:text-xl text-soft-gray/70 mb-8">
                            An animated navigation component with a glowing tubelight effect that follows the active tab.
                        </p>

                        <div className="p-8 rounded-2xl bg-muted/50 border border-border text-left">
                            <h2 className="text-xl font-semibold text-foreground mb-4">Features</h2>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    Smooth spring animations via framer-motion
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    Responsive design with icons on mobile, text on desktop
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    Glowing tubelight effect follows active navigation item
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    Fully integrated with React Router
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Demo;
