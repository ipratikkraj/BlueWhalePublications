# Bluewhale Publications - Product Requirements Document

## Original Problem Statement
Create a modern, highly interactive website for a book publishing company named "Bluewhale Publications" with scroll-triggered storytelling animations, premium UI/UX, and strong brand identity. The website should feature smooth parallax scrolling, motion transitions, and a scroll-based book opening animation representing the publishing journey stages.

## User Personas
1. **Aspiring Authors** - Writers looking to publish their first book
2. **Established Writers** - Authors seeking a new publishing partner
3. **Readers** - Book enthusiasts exploring new publications
4. **Industry Professionals** - Agents, editors, and publishing stakeholders

## Core Requirements

### Design & Style
- Ocean-inspired color palette (navy blue #1a1c1b, lime green #d9fb06, olive #3f4816, teal accents)
- Premium, elegant aesthetic similar to Penguin Random House
- Serif + sans-serif typography mix
- Glassmorphism effects and smooth transitions
- GSAP + ScrollTrigger animations
- Fully responsive design

### Pages Implemented ✅
1. **Home** - Hero section with scroll storytelling, featured books, why choose us, blog preview, CTA
2. **About** - Company story, values, statistics, mission
3. **Services** - Professional editing, book design, publishing, marketing & distribution
4. **Authors** - Author profiles, book catalog with search and genre filters
5. **Blog** - Articles with categories, search functionality, newsletter signup
6. **Submit Manuscript** - Comprehensive form with file upload
7. **Contact** - Contact form, office information, business hours

### Features Implemented ✅
- Sticky navigation with scroll-based styling
- Scroll-triggered storytelling (5 stages: Idea → Content → Editing → Publish → Success)
- GSAP parallax animations
- Interactive book cards with hover effects
- Search and filter functionality
- Form submissions with toast notifications
- Mobile-responsive navigation
- Footer with social links
- Micro-interactions throughout

## Implementation Date
**Phase 1 Completed:** December 2025

## Tech Stack
- **Frontend:** React 19, GSAP 3.15, React Router v7, Tailwind CSS
- **Components:** Shadcn UI, Lucide React icons
- **Animations:** GSAP + ScrollTrigger
- **State:** React hooks, local state
- **Backend:** FastAPI, MongoDB (ready for integration)

## What's Been Implemented
✅ Complete frontend with mock data
✅ All 7 pages fully functional
✅ GSAP scroll animations
✅ Responsive design
✅ Navigation and routing
✅ Form handling (mock)
✅ Search and filter features
✅ High-quality stock images integrated
✅ Toast notifications
✅ Premium design following Pixel Pushers style guidelines

## Mock Data Files
- `/app/frontend/src/data/mockBooks.js` - 6 books with ratings, reviews, genres
- `/app/frontend/src/data/mockAuthors.js` - 6 authors with bios, published books
- `/app/frontend/src/data/mockBlog.js` - 6 blog posts with categories

## Next Phase: Backend Development

### P0 Features (Critical)
1. **Authentication System**
   - Admin dashboard for content management
   - Secure login/logout
   - JWT token implementation

2. **Manuscript Submission API**
   - File upload handling (PDF, DOC, DOCX)
   - Email notifications to admin
   - Submission status tracking
   - Author dashboard to view submission status

3. **Contact Form API**
   - Email integration (SendGrid/Resend)
   - Form data storage
   - Auto-reply confirmation emails

### P1 Features (Important)
4. **Blog Management**
   - CRUD operations for blog posts
   - Category management
   - Featured post selection
   - Rich text editor

5. **Author & Book Management**
   - Add/edit/delete authors
   - Add/edit/delete books
   - Image upload for covers
   - Author profile management

6. **Newsletter Management**
   - Email list collection
   - Integration with email service
   - Unsubscribe functionality

### P2 Features (Nice to Have)
7. **Analytics Dashboard**
   - Submission statistics
   - Page view tracking
   - Popular books/posts

8. **Search Optimization**
   - Full-text search
   - Advanced filtering
   - Search suggestions

9. **User Reviews**
   - Book rating system
   - Review moderation
   - Author testimonials

## Database Schema (To Implement)

```javascript
// Authors Collection
{
  _id: ObjectId,
  name: String,
  bio: String,
  image: String,
  genre: String,
  books: [ObjectId],
  social: Object,
  createdAt: Date
}

// Books Collection
{
  _id: ObjectId,
  title: String,
  authorId: ObjectId,
  genre: String,
  cover: String,
  description: String,
  published: String,
  rating: Number,
  reviews: Number,
  createdAt: Date
}

// Manuscripts Collection
{
  _id: ObjectId,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  bookTitle: String,
  genre: String,
  wordCount: Number,
  synopsis: String,
  previouslyPublished: Boolean,
  fileUrl: String,
  status: String, // "pending", "reviewing", "accepted", "rejected"
  submittedAt: Date,
  reviewedAt: Date
}

// Blog Posts Collection
{
  _id: ObjectId,
  title: String,
  excerpt: String,
  content: String,
  author: String,
  category: String,
  image: String,
  featured: Boolean,
  readTime: String,
  publishedAt: Date
}

// Contacts Collection
{
  _id: ObjectId,
  name: String,
  email: String,
  subject: String,
  message: String,
  status: String, // "new", "responded"
  createdAt: Date
}

// Newsletter Subscribers
{
  _id: ObjectId,
  email: String,
  subscribedAt: Date,
  active: Boolean
}
```

## API Endpoints (To Implement)

### Manuscript Submissions
- `POST /api/manuscripts` - Submit manuscript
- `GET /api/manuscripts` - List all submissions (admin)
- `GET /api/manuscripts/:id` - Get submission details
- `PATCH /api/manuscripts/:id` - Update status

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - List all messages (admin)

### Blog
- `GET /api/blog` - Get all posts
- `GET /api/blog/:id` - Get single post
- `POST /api/blog` - Create post (admin)
- `PATCH /api/blog/:id` - Update post (admin)
- `DELETE /api/blog/:id` - Delete post (admin)

### Authors & Books
- `GET /api/authors` - Get all authors
- `GET /api/authors/:id` - Get author details
- `POST /api/authors` - Create author (admin)
- `GET /api/books` - Get all books
- `GET /api/books/:id` - Get book details
- `POST /api/books` - Create book (admin)

### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe to newsletter

## Next Action Items
1. Implement backend authentication system
2. Create manuscript submission API with file upload
3. Integrate contact form with email service
4. Build admin dashboard for content management
5. Implement blog CRUD operations
6. Add author and book management APIs
7. Testing with testing_agent_v3
