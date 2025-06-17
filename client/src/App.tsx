import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import Products from "@/pages/products";
import ProductDetail from "@/pages/product-detail";
import Categories from "@/pages/categories";
import CategoryProducts from "@/pages/category-products";
import Profile from "@/pages/profile";
import Dashboard from "@/pages/dashboard";
import Messages from "@/pages/messages";
import Wishlist from "@/pages/wishlist";
import SwapHistory from "@/pages/swap-history";
import CreateListing from "@/pages/create-listing";
import EditListing from "@/pages/edit-listing";
import Login from "@/pages/login";
import Register from "@/pages/register";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Help from "@/pages/help";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import Search from "@/pages/search";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/products/:id" component={ProductDetail} />
      <Route path="/categories" component={Categories} />
      <Route path="/categories/:category" component={CategoryProducts} />
      <Route path="/search" component={Search} />
      <Route path="/search/:query" component={Search} />
      <Route path="/profile" component={Profile} />
      <Route path="/profile/:userId" component={Profile} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/messages" component={Messages} />
      <Route path="/wishlist" component={Wishlist} />
      <Route path="/swap-history" component={SwapHistory} />
      <Route path="/create-listing" component={CreateListing} />
      <Route path="/edit-listing/:id" component={EditListing} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/help" component={Help} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="deeldeal-theme">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
