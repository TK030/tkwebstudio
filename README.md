# TK Webstudio - Complete Website

## 📁 Bestandsstructuur

```
TK_Webstudio_Website/
├── index.html              # Homepage
├── diensten.html           # Diensten overzicht
├── portfolio.html          # Portfolio overzicht
├── over.html              # Over mij pagina
├── contact.html           # Contact pagina
├── css/
│   └── style.css          # Hoofdstylesheet
├── js/
│   └── script.js          # JavaScript functionaliteiten
├── diensten/
│   ├── websites.html      # Websites dienst detail
│   ├── webshops.html      # Webshops dienst detail
│   ├── webapplicaties.html # Webapplicaties dienst detail
│   └── apps.html          # Mobile Apps dienst detail
└── portfolio/
    └── advocatenkantoor.html # Voorbeeld case study
```

## 🚀 Installatie & Gebruik

1. **Unzip het bestand** naar je gewenste locatie
2. **Open index.html** in je webbrowser om de website te bekijken
3. **Upload naar je webserver** voor live gebruik

## ✨ Features

### 📱 Responsive Design
- Werkt perfect op desktop, tablet en mobiel
- Mobile-first approach
- Moderne CSS Grid en Flexbox layouts

### 🎨 Modern Design
- Clean, professioneel design
- Kleurenschema: Wit, Donkerblauw (#0D1B2A), Oranje (#FF6B35)
- Smooth animations en hover effecten
- Consistent design systeem

### 🔧 Functionaliteiten
- **Dropdown navigatie** met diensten submenu
- **Contact formulieren** met validatie
- **Portfolio filtering** (JavaScript)
- **Smooth scrolling** navigatie
- **Mobile menu** voor kleinere schermen
- **SEO-geoptimaliseerd** met meta tags

### 📄 Pagina's Inbegrepen

#### Hoofdpagina's:
- **Homepage** - Hero sectie, diensten preview, USP's, portfolio teaser
- **Diensten** - Overzicht van alle diensten met doorlinks
- **Portfolio** - Projecten grid met filter functionaliteit
- **Over mij** - Persoonlijk verhaal, expertise, werkwijze
- **Contact** - Uitgebreid contactformulier + FAQ

#### Diensten Detail Pagina's:
- **Websites** - Pakketten, technologieën, proces
- **Webshops** - E-commerce oplossingen, features, platforms
- **Webapplicaties** - Maatwerk oplossingen, use cases
- **Mobile Apps** - iOS/Android development, app types

#### Portfolio:
- **Case Study Voorbeeld** - Advocatenkantoor project met resultaten

## 🛠 Technische Details

### HTML5
- Semantische HTML structuur
- Accessibility best practices
- SEO-vriendelijke markup
- Open Graph meta tags

### CSS3
- CSS Custom Properties (variabelen)
- CSS Grid en Flexbox
- Responsive breakpoints
- Smooth animations
- Modern CSS features

### JavaScript
- Vanilla JavaScript (geen frameworks)
- Mobile menu toggle
- Smooth scrolling
- Form handling
- Portfolio filtering
- Active navigation highlighting

## 📝 Aanpassingen Maken

### Kleuren Wijzigen
Pas de CSS variabelen aan in `css/style.css`:
```css
:root {
    --primary-color: #0D1B2A;    /* Donkerblauw */
    --accent-color: #FF6B35;     /* Oranje */
    --light-bg: #f8f9fa;         /* Lichtgrijs */
    --white: #ffffff;            /* Wit */
}
```

### Content Aanpassen
- **Contactgegevens**: Zoek naar "info@tkwebstudio.nl" en "+31 6 12 34 56 78"
- **Bedrijfsnaam**: Zoek naar "TK WEBSTUDIO" en "TK Webstudio"
- **Social media links**: Pas de links in de footer aan
- **Logo**: Vervang de tekst logo door een afbeelding

### Portfolio Uitbreiden
1. Voeg nieuwe projecten toe aan `portfolio.html`
2. Maak nieuwe case study pagina's in de `portfolio/` map
3. Gebruik `portfolio/advocatenkantoor.html` als template

## 🔍 SEO Optimalisatie

### Inbegrepen SEO Features:
- Meta descriptions op elke pagina
- Structured data markup
- Semantic HTML
- Fast loading times
- Mobile-friendly design
- Internal linking structure

### Nog Te Doen:
- Google Analytics toevoegen
- Google Search Console instellen
- Sitemap.xml genereren
- Robots.txt aanmaken
- Schema markup uitbreiden

## 📊 Performance

### Optimalisaties:
- Minimale CSS en JavaScript
- Geoptimaliseerde afbeeldingen (placeholders)
- Efficient CSS Grid layouts
- Geen externe dependencies

### Aanbevelingen:
- Voeg echte geoptimaliseerde afbeeldingen toe
- Implementeer lazy loading voor afbeeldingen
- Overweeg een CDN voor statische assets
- Comprimeer CSS en JavaScript voor productie

## 🚀 Deployment

### Lokaal Testen:
```bash
# Start een lokale server (Python)
python -m http.server 8000

# Of met Node.js
npx serve .
```

### Live Zetten:
1. Upload alle bestanden naar je webserver
2. Zorg dat `index.html` in de root staat
3. Test alle links en functionaliteiten
4. Configureer SSL certificaat
5. Stel redirects in indien nodig

## 📞 Support

Voor vragen over deze website template:
- **E-mail**: info@tkwebstudio.nl
- **Telefoon**: +31 6 12 34 56 78

## 📄 Licentie

Deze website template is gemaakt voor TK Webstudio.
Alle rechten voorbehouden © 2024 TK Webstudio.

---

**Veel succes met je nieuwe website! 🎉**
