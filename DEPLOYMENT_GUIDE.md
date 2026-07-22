# Deployment Guide — Pustaka Tujua Media

## 📋 PRE-DEPLOYMENT CHECKLIST

### Before Going Live

- [ ] Update company info in footer (all pages)
- [ ] Update WhatsApp number (js/main.js, footer links)
- [ ] Update email addresses (all pages)
- [ ] Update social media links (Instagram, Facebook, etc.)
- [ ] Replace placeholder book cover images
- [ ] Update team member names & photos (pages/about.html)
- [ ] Update portfolio items & descriptions (pages/portfolio.html)
- [ ] Test all WhatsApp links on mobile device
- [ ] Run Lighthouse audit (target: 90+)
- [ ] Test on real devices (iPhone, Android, laptop)
- [ ] Verify all links work (no 404s)
- [ ] Check console for errors (DevTools F12 → Console)
- [ ] Update SEO meta tags per page (if needed)
- [ ] Optimize all images (TinyPNG)
- [ ] Add company logo to `/images/` if needed

---

## 🚀 DEPLOYMENT OPTIONS

### Option 1: NETLIFY (Recommended for static sites)

**Pros**: Free, fast, auto HTTPS, easy setup, great for static sites  
**Cons**: None really

#### Steps:

1. **Create Netlify Account**
   - Go to https://netlify.com/
   - Sign up with GitHub/GitLab/Bitbucket

2. **Connect GitHub Repository**
   - Click "New site from Git"
   - Select your Git provider
   - Authorize Netlify
   - Select repository

3. **Configure Build Settings**
   - Build command: `npm run build:css`
   - Publish directory: `.` (root folder)
   - Leave other settings default

4. **Deploy**
   - Netlify auto-deploys on push to main branch
   - Takes 1-2 minutes
   - Get auto-generated URL (e.g., `https://xxx.netlify.app`)

5. **Add Custom Domain** (if you have one)
   - Netlify Dashboard → Site settings → Domain management
   - Add custom domain
   - Update DNS records (Netlify gives instructions)
   - Takes 24-48 hours to propagate

#### Netlify.toml Config (Optional)

Create `netlify.toml` in root:

```toml
[build]
  command = "npm run build:css"
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/css/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/js/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=3600"

[[headers]]
  for = "/fonts/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

---

### Option 2: VERCEL

**Pros**: Fast, easy, integrates with Next.js  
**Cons**: Geared towards Node.js

#### Steps:

1. Go to https://vercel.com/
2. Sign up / Sign in
3. Click "Add New → Project"
4. Import Git repository
5. Set build command: `npm run build:css`
6. Set output directory: `.`
7. Deploy!

#### Vercel.json Config

```json
{
  "buildCommand": "npm run build:css",
  "outputDirectory": "."
}
```

---

### Option 3: GitHub Pages (Free, but simpler)

**Pros**: Free, integrated with GitHub  
**Cons**: Limited customization, slower builds

#### Steps:

1. Push code to GitHub repository
2. Go to repository Settings → Pages
3. Select source: `main` branch, `/ (root)` folder
4. Click Save
5. Site deploys at `https://username.github.io/repo-name/`

**Note**: Since this is static HTML, GitHub Pages works great!

#### Update Links

Update all relative links to include repo name:
```html
<!-- Change from: -->
<a href="/pages/about.html">About</a>

<!-- To: -->
<a href="/repo-name/pages/about.html">About</a>
```

(This is why Netlify/Vercel is easier)

---

### Option 4: Traditional Web Hosting

**Pros**: Full control, custom domains easy  
**Cons**: Manual deployment, need FTP/SSH access

#### Steps:

1. **Prepare files**:
   ```bash
   npm run build:css  # Compile CSS
   # All files ready
   ```

2. **Upload via FTP**:
   - Use FileZilla or similar FTP client
   - Connect to hosting provider
   - Upload all files to `public_html/` or `www/` folder

3. **Set Custom Domain**:
   - Update DNS records at domain registrar
   - Point to hosting provider's nameservers

4. **Enable HTTPS**:
   - Most hosts auto-enable via Let's Encrypt
   - Request in hosting control panel

---

## 🌐 DOMAIN SETUP

### If You Have a Custom Domain

1. **Purchase Domain** (if not already)
   - Registrars: Namecheap, GoDaddy, Google Domains, etc.

2. **Update DNS Records**
   
   **For Netlify**:
   - Add CNAME record pointing to Netlify URL
   - Or use Netlify's nameservers (easier)

   **For Vercel**:
   - Add CNAME to `cname.vercel.com`

   **For GitHub Pages**:
   - Add A record or CNAME record
   - See: https://docs.github.com/en/pages/configuring-a-custom-domain

3. **Verify DNS** (wait 24-48 hours)
   ```bash
   nslookup pustaka-tujua-media.com
   ```

---

## 📱 POST-DEPLOYMENT

### 1. Test Live Site

- [ ] Load homepage → check all sections
- [ ] Test hamburger menu on mobile
- [ ] Click WhatsApp links → opens chat
- [ ] Test all page navigation
- [ ] Verify images load
- [ ] Check footer links
- [ ] Test forms (if applicable)

### 2. Monitor Performance

**Run Lighthouse on live site**:
```bash
npx lighthouse https://pustaka-tujua-media.com --view
```

**Check Google PageSpeed**:
https://pagespeed.web.dev/

### 3. Setup Google Search Console

1. Go to https://search.google.com/search-console/
2. Add property (your domain)
3. Verify ownership (DNS record or HTML file)
4. Submit sitemap.xml
5. Monitor indexing status

### 4. Setup Google Analytics (Optional)

1. Go to https://analytics.google.com/
2. Create new property
3. Get tracking code
4. Add to `<head>` of all pages:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### 5. Setup Monitoring (Optional)

- **Uptime Monitoring**: Uptime Robot (free)
  - Monitors site availability 24/7
  - Alerts if site goes down
  - https://uptimerobot.com/

- **Error Tracking**: Sentry (optional)
  - Tracks JavaScript errors
  - Alerts on issues
  - https://sentry.io/

---

## 🔄 CONTINUOUS DEPLOYMENT

### Auto-Deploy on Push (Netlify)

Once connected to GitHub:
1. Edit files locally
2. Commit: `git commit -m "Update content"`
3. Push: `git push origin main`
4. Netlify automatically deploys (1-2 min)
5. Check Netlify dashboard for deploy status

### Manual Updates

If deploying via FTP/traditional hosting:
1. Edit files locally
2. Run `npm run build:css` to compile
3. Upload changed files via FTP
4. Verify on live site

---

## 🛠️ MAINTENANCE

### Regular Tasks

**Weekly**:
- Check Google Search Console for crawl errors
- Monitor analytics (if enabled)

**Monthly**:
- Run Lighthouse audit
- Check all links for 404s
- Update content if needed
- Review contact form submissions

**Quarterly**:
- Update portfolio items
- Refresh testimonials
- Check competitor sites
- Audit SEO performance

### Backup Strategy

- GitHub is your backup (version control)
- If not using GitHub, keep local copy

### Updates

**CSS Changes**:
```bash
npm run build:css
git add css/main.css
git commit -m "Update styles"
git push
```

**Content Changes**:
- Edit HTML files directly
- Push to GitHub (auto-deploy)
- No build needed for content-only changes

---

## 📊 PERFORMANCE TARGETS POST-LAUNCH

### Google PageSpeed Insights

**Desktop**:
- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 90
- SEO: ≥ 95

**Mobile**:
- Performance: ≥ 85 (acceptable 80+)
- Accessibility: ≥ 95
- Best Practices: ≥ 90
- SEO: ≥ 90

### Core Web Vitals

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

Monitor at: https://web.dev/vitals/

---

## 🐛 TROUBLESHOOTING

### Site Down / 500 Error

1. Check hosting status page
2. Verify files uploaded correctly
3. Check console for errors (DevTools → Console)
4. Check server logs (if accessible)
5. Restart server (if applicable)

### CSS Not Showing / Styles Broken

1. Rebuild CSS: `npm run build:css`
2. Clear browser cache: Ctrl+Shift+Del
3. Check CSS file exists: `/css/main.css`
4. Verify CSS import in HTML: `<link rel="stylesheet" href="/css/main.css">`

### JavaScript Errors

1. Check DevTools Console (F12 → Console)
2. Check JS file loaded: Network tab
3. Check for typos in `js/main.js`
4. Verify HTML IDs match (`#hamburger`, `#mobile-menu`)

### WhatsApp Links Not Working

1. Update WhatsApp number in `js/main.js`
2. Test on mobile device (better support)
3. Check link format: `https://wa.me/62xxxxxxxxx?text=...`
4. Verify message is URL-encoded

### Images Not Loading

1. Check image paths (relative, not absolute)
2. Verify images uploaded to `/images/`
3. Check file extensions (.jpg, .png)
4. Check console for 404 errors

---

## ✅ FINAL CHECKLIST

### Before Going Live

- [ ] Domain registered & pointing to hosting
- [ ] SSL/HTTPS enabled
- [ ] All company info updated
- [ ] WhatsApp number correct
- [ ] All images uploaded & optimized
- [ ] Logo/branding in place
- [ ] No broken links
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] Mobile responsive tested
- [ ] Contact form tested (if applicable)
- [ ] Social links working
- [ ] SEO meta tags complete
- [ ] Sitemap.xml accessible
- [ ] Robots.txt in place
- [ ] Google Search Console set up
- [ ] Analytics enabled (optional)
- [ ] Backup plan in place

---

## 📞 SUPPORT & RESOURCES

### Getting Help

- **Netlify Docs**: https://docs.netlify.com/
- **Vercel Docs**: https://vercel.com/docs
- **GitHub Pages Docs**: https://pages.github.com/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **MDN Web Docs**: https://developer.mozilla.org/

### Common Issues

- **Responsive images**: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
- **Web fonts**: https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts
- **Form handling**: https://developer.mozilla.org/en-US/docs/Learn/Forms
- **JavaScript debugging**: https://developer.chrome.com/docs/devtools/javascript/

---

**Deployment Status**: READY FOR PRODUCTION 🚀

Next step: Choose hosting provider → Deploy → Monitor performance → Iterate based on feedback.
