import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Code, MessageSquare, TrendingUp, ArrowRight, CheckCircle, Search, CalendarDays, Users, HandCoins } from 'lucide-react';
import ROICalculator from '@/components/ROICalculator';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const packages = [
    {
      icon: <Users className="h-8 w-8 text-success" />,
      title: "Essential Community Site",
      description: "Standard 5-page site with giving or registration built in",
      features: [
        "5 pages: Home, About/Our Story, Programs/Ministries or Teams, Events, Contact",
        "One Give/Donate or Register/Join integration",
        "Mobile-first, WCAG-friendly setup",
        "Core Web Vitals performance pass",
        "1 round of revisions",
        "2-week timeline"
      ],
      price: "$1,900",
      popular: false
    },
    {
      icon: <CalendarDays className="h-8 w-8 text-accent" />,
      title: "Community Plus",
      description: "8–10 pages and 2 modules for deeper engagement",
      features: [
        "8–10 pages + 2 modules (choose: Events, News/Sermons, Volunteer, Newsletter)",
        "Preset donation tiers & recurring giving (or Registration form)",
        "Content migration up to 10 pages",
        "Training + 30 days of launch support",
        "2 rounds of revisions",
        "3–4 weeks timeline"
      ],
      price: "$3,300",
      popular: true
    },
    {
      icon: <HandCoins className="h-8 w-8 text-accent" />,
      title: "Impact Pro",
      description: "12–15 pages, 3 modules, and advanced structure",
      features: [
        "12–15 pages + 3 modules (e.g., Sermon/Media archive, Groups/Ministries, Events)",
        "Multi-campus/team structure; multi-language ready",
        "Content migration up to 20 pages",
        "Copy polish for key pages",
        "60 days of launch support",
        "4–6 weeks timeline"
      ],
      price: "$4,900",
      popular: false
    }
  ];

  const auditProduct = {
    icon: <CheckCircle className="h-8 w-8 text-accent" />,
    title: "Quick Audit",
    description: "Performance, accessibility, messaging, and donation/registration teardown",
    features: [
      "Detailed performance analysis report",
      "Mobile usability assessment",
      "SEO & messaging opportunities",
      "Donation/registration flow review",
      "Competitor comparison",
      "30-minute strategy consultation"
    ],
    price: "$299",
    note: "Credited if you proceed with any build"
  };

  return (
    <Layout>
      <Helmet>
        <title>Community Website Packages | Position Digital</title>
        <meta name="description" content="Standardized, lower-cost website packages for faith groups, schools, sports, and community orgs." />
        <link rel="canonical" href="/services" />
      </Helmet>
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Our Services</Badge>
            <h1 className="mb-6">
              Community Website Packages
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Standardized, lower-cost builds focused on donations, registrations, and community engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Fixed-Price Packages + Add-ons + Audit */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Simple, Community-First Packages</h2>
            <p className="text-lg text-muted-foreground">
              Clear scope. Lower cost. Built for donations, registrations, and engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <Card key={index} className={`hover-lift shadow-medium h-full ${pkg.popular ? 'border-2 border-accent/50 shadow-accent' : ''} relative`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 gradient-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {pkg.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{pkg.title}</CardTitle>
                  <CardDescription className="text-base">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-border">
                    <div className="text-2xl font-bold text-accent mb-4">
                      {pkg.price}
                    </div>
                    <Button asChild className={`w-full ${pkg.popular ? 'gradient-accent text-accent-foreground' : ''}`}>
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add-ons */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-xl font-semibold mb-4 text-center">Popular Add-ons</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: 'Events Calendar module', price: '$300' },
                { name: 'Sermons/News archive', price: '$400' },
                { name: 'Online Giving setup (Stripe/Donorbox)', price: '$250' },
                { name: 'Volunteer/Registration forms', price: '$200' },
                { name: 'Newsletter integration', price: '$150' },
                { name: 'Content migration beyond package', price: '$20/page' },
                { name: 'Accessibility remediation pass (AA)', price: '$400' },
                { name: 'Care Plan updates', price: '$79/mo or $690/yr' },
              ].map((a, i) => (
                <Card key={i} className="border-dashed">
                  <CardContent className="p-4 flex items-center justify-between">
                    <span className="text-sm">{a.name}</span>
                    <span className="text-sm font-medium text-primary">{a.price}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Audit Product */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-2">Not Sure Which Package is Right?</h3>
              <p className="text-muted-foreground">Start with our quick audit to get personalized recommendations.</p>
            </div>
            <Card className="shadow-large border-2 border-accent/20">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {auditProduct.icon}
                </div>
                <CardTitle className="text-xl mb-2">{auditProduct.title}</CardTitle>
                <CardDescription className="text-base">
                  {auditProduct.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {auditProduct.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">{auditProduct.price}</span>
                    <Badge variant="secondary">{auditProduct.note}</Badge>
                  </div>
                  <Button asChild className="w-full gradient-accent text-accent-foreground">
                    <Link to="/contact" className="flex items-center space-x-2">
                      <Search className="h-4 w-4" />
                      <span>Order Your Audit</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Process Section */}
      <section className="py-16 lg:py-24 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Our Proven Process</h2>
            <p className="text-lg text-muted-foreground">
              A collaborative approach that ensures your project is delivered on time, 
              on budget, and aligned with your business goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description: "We understand your business, audience, and goals through detailed discovery sessions."
              },
              {
                step: "02", 
                title: "Design & Messaging",
                description: "Create wireframes, designs, and strategic copy that resonates with your target audience."
              },
              {
                step: "03",
                title: "Development & Testing", 
                description: "Hand-code your website with performance, security, and SEO as top priorities."
              },
              {
                step: "04",
                title: "Launch & Optimize",
                description: "Deploy your site and provide training, analytics setup, and ongoing optimization recommendations."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center mx-auto mb-4 font-bold">
                  {process.step}
                </div>
                <h3 className="font-semibold mb-3">{process.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your project and create a custom solution that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="gradient-accent text-accent-foreground font-semibold hover-lift"
              >
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Request Free Audit</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;