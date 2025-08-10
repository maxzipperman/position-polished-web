import { Helmet } from 'react-helmet-async';
import Layout from './Layout';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { BeforeAfterSlider } from './ui/before-after-slider';
import { Badge } from './ui/badge';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Shield, TrendingUp, ArrowRight } from 'lucide-react';
import { IndustryData } from '@/types/industry';

interface IndustryPageProps {
  data: IndustryData;
}

export const IndustryPage = ({ data }: IndustryPageProps) => {
  return (
    <>
      <Helmet>
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
        <meta name="keywords" content={data.seo.keywords.join(', ')} />
        <link rel="canonical" href={`https://positiondigital.com${data.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Position Digital",
            "description": data.seo.description,
            "url": `https://positiondigital.com${data.slug}`,
            "sameAs": ["https://twitter.com/positiondigital"]
          })}
        </script>
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 text-primary border-primary/20">
                {data.industry}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                {data.hero.headline}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                {data.hero.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to="/contact">{data.hero.primaryCtaText}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="#case-studies">{data.hero.secondaryCtaText}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why This Matters</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {data.whyMatters.map((point, index) => (
                  <Card key={index} className="border-0 shadow-sm">
                    <CardContent className="p-6">
                      <CheckCircle className="h-8 w-8 text-primary mb-4" />
                      <p className="text-muted-foreground">{point}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Proof Points */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Proven Results</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {data.proof.map((point, index) => {
                  const icons = [Zap, Shield, TrendingUp];
                  const Icon = icons[index % icons.length];
                  return (
                    <Card key={index} className="text-center">
                      <CardContent className="p-6">
                        <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                        <p className="font-medium">{point}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Services Focus */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">What We Focus On</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.servicesFocus.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-background rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Showcase */}
        <section id="case-studies" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Before & After</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {data.beforeAfter.map((comparison, index) => (
                  <BeforeAfterSlider
                    key={index}
                    beforeImage={comparison.beforeImage}
                    afterImage={comparison.afterImage}
                    caption={comparison.caption}
                    className="w-full"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {data.caseStudies.map((study, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader>
                      <CardTitle className="text-xl">{study.title}</CardTitle>
                      <p className="text-primary font-medium">{study.client}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground mb-2">Challenge</h4>
                        <p className="text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground mb-2">Solution</h4>
                        <p className="text-sm">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground mb-2">Outcome</h4>
                        <p className="text-sm font-medium text-primary">{study.outcome}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-2xl md:text-3xl font-medium mb-8 text-foreground">
                "{data.testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold">{data.testimonial.author}</p>
                <p className="text-muted-foreground">{data.testimonial.role}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {data.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6">
                    <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* End CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {data.endCta.heading}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {data.endCta.subheading}
              </p>
              <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  {data.endCta.primaryCtaText}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};