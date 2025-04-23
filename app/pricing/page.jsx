import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Pricing() {
  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-white to-slate-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-6">
                Simple, transparent <span className="text-primary">pricing</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl">
                Choose the plan that best fits your needs. All plans include our core scheduling features.
              </p>
            </div>

            <div className="flex justify-center mb-10">
              <Tabs defaultValue="monthly" className="w-full max-w-md">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="annually">Annually (Save 20%)</TabsTrigger>
                </TabsList>
                <div className="mt-1 text-center text-sm text-slate-500">All prices in USD</div>
              </Tabs>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Free Plan */}
              <Card className="border-slate-200 flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl">Basic</CardTitle>
                  <CardDescription>For individuals just getting started</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-slate-500 ml-1">/ month</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>1 calendar connection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>1 event type</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Email notifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Basic booking page</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Unlimited bookings</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Sign up for free
                  </Button>
                </CardFooter>
              </Card>

              {/* Pro Plan */}
              <Card className="border-primary relative flex flex-col">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Professional</CardTitle>
                  <CardDescription>For individuals who need more flexibility</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$12</span>
                    <span className="text-slate-500 ml-1">/ month</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>2 calendar connections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Unlimited event types</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Email & SMS notifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Custom branding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Group events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Automated reminders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Zapier integration</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start free trial</Button>
                </CardFooter>
              </Card>

              {/* Team Plan */}
              <Card className="border-slate-200 flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl">Teams</CardTitle>
                  <CardDescription>For teams that need to collaborate</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$20</span>
                    <span className="text-slate-500 ml-1">/ user / month</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Everything in Professional</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Team scheduling page</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Round-robin assignments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Admin controls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Advanced analytics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Contact sales
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-xl font-semibold mb-2">Need something more customized?</h3>
              <p className="text-slate-600 mb-6">
                We offer enterprise plans with advanced security, SSO, and dedicated support.
              </p>
              <Button variant="outline" size="lg">
                Contact our sales team
              </Button>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Compare all features</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                A detailed breakdown of what&apos;s included in each plan
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4 font-medium text-slate-500">Features</th>
                    <th className="text-center py-4 px-4 font-medium text-slate-500">Basic</th>
                    <th className="text-center py-4 px-4 font-medium text-slate-500">Professional</th>
                    <th className="text-center py-4 px-4 font-medium text-slate-500">Teams</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Calendar connections</td>
                    <td className="text-center py-4 px-4">1</td>
                    <td className="text-center py-4 px-4">2</td>
                    <td className="text-center py-4 px-4">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Event types</td>
                    <td className="text-center py-4 px-4">1</td>
                    <td className="text-center py-4 px-4">Unlimited</td>
                    <td className="text-center py-4 px-4">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Group events</td>
                    <td className="text-center py-4 px-4">—</td>
                    <td className="text-center py-4 px-4">✓</td>
                    <td className="text-center py-4 px-4">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Custom branding</td>
                    <td className="text-center py-4 px-4">—</td>
                    <td className="text-center py-4 px-4">✓</td>
                    <td className="text-center py-4 px-4">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">SMS notifications</td>
                    <td className="text-center py-4 px-4">—</td>
                    <td className="text-center py-4 px-4">✓</td>
                    <td className="text-center py-4 px-4">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Team scheduling</td>
                    <td className="text-center py-4 px-4">—</td>
                    <td className="text-center py-4 px-4">—</td>
                    <td className="text-center py-4 px-4">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Admin controls</td>
                    <td className="text-center py-4 px-4">—</td>
                    <td className="text-center py-4 px-4">—</td>
                    <td className="text-center py-4 px-4">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Priority support</td>
                    <td className="text-center py-4 px-4">—</td>
                    <td className="text-center py-4 px-4">—</td>
                    <td className="text-center py-4 px-4">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Frequently asked questions</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Have more questions?{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  Contact us
                </Link>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Can I try before I buy?</h3>
                <p className="text-slate-600">
                  Yes! We offer a 14-day free trial of our Professional plan. No credit card required.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-3">How does billing work?</h3>
                <p className="text-slate-600">
                  We offer both monthly and annual billing. Annual billing comes with a 20% discount.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Can I change plans later?</h3>
                <p className="text-slate-600">
                  Yes, you can upgrade, downgrade, or cancel your plan at any time from your account settings.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-3">What payment methods do you accept?</h3>
                <p className="text-slate-600">
                  We accept all major credit cards, PayPal, and for annual enterprise plans, we can invoice you.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  )
}
