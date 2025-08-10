import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Link } from 'react-router-dom';
import { CalendarDays, HeartHandshake, Users, HandCoins, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  const events = [
    { title: 'Community Food Drive', date: 'Sat, Sep 14', time: '10:00 AM', href: '/events' },
    { title: 'Volunteer Orientation', date: 'Wed, Sep 18', time: '6:30 PM', href: '/events' },
    { title: 'Harvest Festival', date: 'Sun, Oct 6', time: '12:00 PM', href: '/events' },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Websites for Community Organizations | Position Digital</title>
        <meta name="description" content="We build warm, accessible websites that amplify your mission, engage your community, and increase donations and registrations." />
        <link rel="canonical" href="/" />
      </Helmet>

      {/* Section 1: Hero */}
      <section className="pt-24 pb-16 lg:pb-24 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HeartHandshake className="h-4 w-4" />
              <span>Built for nonprofits and faith communities</span>
            </div>
            <h1 className="mb-4 text-primary">Your Mission, Amplified. Your Community, Engaged.</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              We build beautiful, user-friendly websites that make it easy to share your impact, grow your community, and increase donations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-accent text-accent-foreground font-semibold">
                <Link to="/services" className="flex items-center space-x-2">
                  <span>See How We Help</span>
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

      {/* Section 2: Engagement Pillars */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover-lift shadow-soft">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-accent" />
                  <CardTitle>Share Your Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                Clearly communicate your story and purpose with a professional website that inspires trust and action.
              </CardContent>
            </Card>
            <Card className="hover-lift shadow-soft">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <CalendarDays className="h-6 w-6 text-accent" />
                  <CardTitle>Engage Your Community</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                Bring people together with integrated event calendars, volunteer sign-ups, and community news.
              </CardContent>
            </Card>
            <Card className="hover-lift shadow-soft">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <HandCoins className="h-6 w-6 text-accent" />
                  <CardTitle>Grow Your Donations</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                Make giving easy and secure with a frictionless, mobile-friendly donation process built to increase support.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="mb-3">Industries We Serve</h2>
            <p className="text-muted-foreground">We partner with community-focused groups to help them grow impact.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { name: 'Faith & Religious', href: '/faith' },
              { name: 'K-12 Schools & PTAs', href: '/schools' },
              { name: 'Youth Sports', href: '/youth-sports' },
              { name: 'Community Centers & Nonprofits', href: '/community' },
              { name: 'Arts & Culture', href: '/arts-culture' },
              { name: 'Parks & Recreation', href: '/parks-rec' },
            ].map((s, i) => (
              <Card key={i} className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg">{s.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Link to={s.href} className="text-accent font-medium">Learn more →</Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Impact Stories */}
      <section className="py-16 lg:py-24 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="mb-3">See the Difference We Help Create</h2>
              <div className="bg-card p-6 rounded-lg shadow-soft">
                <h3 className="text-xl font-semibold mb-2">250 Hot Meals Served Weekly</h3>
                <p className="text-muted-foreground">
                  With their new, easy-to-update website, the Community Food Initiative increased volunteer sign-ups by 40%, helping them meet the growing needs of our neighbors.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img src="/placeholder.svg" alt="Volunteer handing a meal to a smiling community member" className="w-full rounded-lg shadow-soft" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Upcoming Events */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="mb-3">Join Us for an Upcoming Event</h2>
            <p className="text-muted-foreground">Stay connected with what’s happening in the community.</p>
          </div>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {events.slice(0,3).map((e, i) => (
              <Card key={i} className="hover-lift shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">{e.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <div>{e.date}</div>
                  <div>{e.time}</div>
                  <Link to={e.href} className="text-accent font-medium inline-block mt-2">Learn More →</Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Testimonial */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl font-semibold mb-4">“Working with Position Digital transformed how we connect with our supporters. Our old site was a source of frustration; our new one is a source of pride and has directly led to an increase in online donations and event attendance.”</blockquote>
            <p className="text-muted-foreground">Sarah K., Volunteer Coordinator</p>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="py-16 lg:py-24 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4 text-primary-foreground">Ready to Build a Website That Inspires Action?</h2>
            <p className="text-primary-foreground/80 mb-8">Let’s create a digital home for your mission that reflects your work and empowers your community to get involved.</p>
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Get a Free Strategy Call</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
