import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Code, MessageSquare, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-accent" />,
      title: "Website Design & Development",
      description: "Custom-coded, fast, secure websites that you own outright",
      features: [
        "Hand-coded HTML, CSS, and JavaScript",
        "90+ Google PageSpeed scores guaranteed", 
        "Mobile-first responsive design",
        "Security-focused, plugin-light builds",
        "SEO-optimized structure and content",
        "Full ownership - no platform lock-in"
      ],
      price: "Starting at $4,500"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-accent" />,
      title: "Brand Messaging Strategy", 
      description: "Clarify your unique value and improve conversion rates",
      features: [
        "Competitor analysis and positioning",
        "Target audience research and personas",
        "Value proposition development",
        "Website copy that converts",
        "Industry-specific messaging",
        "A/B testing recommendations"
      ],
      price: "Starting at $2,500"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-success" />,
      title: "Optimization & Refresh",
      description: "Tune-ups, redesigns, and copy refresh for existing sites",
      features: [
        "Performance optimization audit",
        "Conversion rate optimization", 
        "Content strategy refresh",
        "Technical SEO improvements",
        "User experience enhancements",
        "Analytics setup and tracking"
      ],
      price: "Starting at $1,500"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Our Services</Badge>
            <h1 className="mb-6">
              Everything You Need for a 
              <span className="text-accent"> High-Performance Website</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              From strategy to launch, we provide end-to-end solutions that deliver results. 
              No ongoing fees, no platform lock-in — just a website that works for you.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift shadow-medium h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="text-lg font-semibold text-accent mb-4">
                      {service.price}
                    </div>
                    <Button asChild className="w-full">
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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