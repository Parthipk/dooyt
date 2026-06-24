export type Testimonial = {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Guy Hawkins",
    role: "CEO & Founder",
    rating: 5.0,
    quote:
      "Dooyt has made managing our business so much easier! The platform is simple, fast, and helps our team stay organized.",
  },
  {
    id: "t2",
    name: "Jane Cooper",
    role: "Operations Lead",
    rating: 5.0,
    quote:
      "Switching to Dooyt replaced four separate tools for us. Reporting now takes minutes instead of days.",
  },
  {
    id: "t3",
    name: "Wade Warren",
    role: "Managing Director",
    rating: 5.0,
    quote:
      "The dashboards give me instant visibility across departments. Onboarding was quick and support is genuinely helpful.",
  },
];