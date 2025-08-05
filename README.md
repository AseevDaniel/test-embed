# 🎯 Empathy-Powered Playbook Generator

A client-side web application that helps customer success professionals generate personalized response playbooks using AI-style guidance, with adjustable empathy and urgency controls.

## ✨ Features

### 🎛️ Customizable Controls
- **Scenario Selection**: Choose from 5 common customer situations
- **Empathy Slider**: Adjust tone from direct (1) to very warm (10)
- **Urgency Slider**: Control directness from gentle (1) to high priority (10)
- **Customer Segment**: Tailor responses for SMB, Mid-Market, or Enterprise
- **Value Focus**: Select relevant value propositions (ROI, Simplicity, Support, Integrations)

### 📝 Dual-Mode Generation System

#### 🎯 Single Response Mode
Generate responses for three different communication channels:
- **📧 Email Draft**: Professional email templates with subject lines
- **📞 Call Script**: Structured talking points with opening, value connection, and next steps
- **💬 In-App Nudge**: Concise notification-style messages with clear CTAs

#### 📈 Success Plan Generator
Create comprehensive multi-touchpoint communication sequences:
- **24+ Customer Outcomes**: Choose from revenue growth, adoption, satisfaction, and operational goals
- **Flexible Duration**: 30, 60, 90, or 120-day plans
- **Communication Styles**: Light touch, standard, intensive, or milestone-based
- **Timeline Visualization**: Interactive timeline with phase-based color coding
- **Content Preview**: Actual email, call, and nudge content for each touchpoint

### 🛠️ Productivity Features
- **Real-time Generation**: Instant response creation as you adjust settings
- **Editable Output**: Click to edit generated responses directly
- **Copy to Clipboard**: One-click copying for each response type
- **Download Options**: Save individual responses or complete playbooks as text files
- **Export All**: Download all three response types in a single file

### 🌙 User Experience
- **Light/Dark Mode**: Toggle between themes for comfortable viewing
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Offline Capable**: No internet connection required after initial load
- **Accessible**: Keyboard navigation and screen reader support

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup or installations required

### Installation
1. Download or clone the repository
2. Open `index.html` in your browser
3. Start generating playbooks immediately!

### File Structure
```
empathy-playbook-generator/
├── index.html          # Main application structure
├── styles.css          # Complete styling and responsive design
├── script.js           # All functionality and templates
└── README.md           # This documentation
```

## 📋 How to Use

### 🎯 Single Response Mode

#### Step 1: Select Your Scenario
Choose from five common customer success scenarios:
- 😤 **Upset about pricing** - Handle pricing objections
- 😴 **Inactive post-onboarding** - Re-engage dormant users
- 🤔 **Confused about feature** - Clarify product functionality
- 💎 **Ready for upsell** - Capitalize on expansion opportunities
- 😞 **Negative feedback response** - Address customer complaints

#### Step 2: Adjust Your Approach
- **Empathy Level**: Lower values = more direct, higher values = more warm and understanding
- **Urgency Level**: Lower values = gentle approach, higher values = immediate action needed

#### Step 3: Define Your Customer
- Select customer segment (SMB/Mid-Market/Enterprise)
- Choose relevant value propositions that resonate with your customer

#### Step 4: Generate & Customize
- Click "✨ Generate Playbook" to create responses
- Switch between Email, Call, and Nudge tabs to see different formats
- Edit responses directly in the text areas
- Copy or download individual responses

### 📈 Success Plan Generator Mode

#### Step 1: Choose Your Outcome
Select from 24+ customer success outcomes organized by category:
- **💰 Revenue & Growth**: Retention, upsells, referrals, market expansion
- **🚀 Adoption & Engagement**: User adoption, onboarding, time-to-value
- **😊 Satisfaction & Experience**: CSAT, NPS, journey optimization
- **🔧 Operational Excellence**: Churn prevention, support efficiency
- **🎓 Education & Advocacy**: Training programs, community building
- **📱 Digital & Technical**: Mobile engagement, analytics adoption

#### Step 2: Configure Your Plan
- **Duration**: Choose 30, 60, 90, or 120-day plans
- **Communication Style**: Light touch, standard, intensive, or milestone-based
- **Customer Segment**: SMB, Mid-Market, or Enterprise
- **Value Focus**: Select relevant value propositions

#### Step 3: Generate Your Success Plan
- Click "🚀 Generate Success Plan" to create your multi-touchpoint sequence
- View the plan summary with key metrics and timeline details
- Explore the detailed communication sequence with actual content previews

#### Step 4: Use Your Plan
- **📅 Timeline View**: Toggle between detailed and compact timeline views
- **📋 Copy Plan**: Copy the entire success plan to clipboard
- **💾 Download Plan**: Save as a text file for sharing or documentation
- **Content Preview**: See actual email subjects, call scripts, and nudge messages

### 🎊 Export & Implementation
- Use generated plans directly with your customer success team
- Customize touchpoint content based on specific customer needs
- Track progress using the suggested key metrics
- Adapt communication frequency based on customer engagement

## 🎨 Customization

### Adding New Scenarios
To add new customer scenarios, modify the `templates` object in `script.js`:

```javascript
templates['new-scenario'] = {
    email: {
        empathy: {
            low: "Direct approach...",
            medium: "Balanced approach...",
            high: "Very empathetic approach..."
        },
        urgency: {
            low: "Gentle urgency...",
            medium: "Moderate urgency...",
            high: "High urgency..."
        }
    },
    // Add call and nudge templates similarly
};
```

### Modifying Value Propositions
Update the `valueTemplates` object to customize value propositions for different customer segments.

### Styling Changes
All visual customization can be done through CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #2563eb;  /* Main brand color */
    --bg-primary: #ffffff;     /* Background color */
    /* ... other variables */
}
```

## 🔧 Technical Details

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Key Technologies
- **HTML5** - Semantic structure with accessibility features
- **CSS3** - Modern styling with custom properties and grid/flexbox
- **Vanilla JavaScript** - No external dependencies
- **Local Storage** - Theme preference persistence

### Performance Features
- Optimized for offline use
- Responsive images and lazy loading
- Efficient DOM manipulation
- Smooth animations and transitions

## 🎯 Use Cases

### Customer Success Teams
- Generate consistent, on-brand responses
- Train new team members on tone and messaging
- Quickly adapt responses for different customer segments

### Sales Teams
- Handle objections with appropriate empathy levels
- Customize outreach based on prospect characteristics
- Maintain consistent messaging across team members

### Support Teams
- Respond to different types of customer issues
- Escalate with appropriate urgency and tone
- Provide empathetic support while maintaining efficiency

### Training & Onboarding
- Teach new hires about empathy and urgency in communications
- Practice different communication scenarios
- Understand how tone affects customer relationships

## 🤝 Contributing

This is an open-source project! Feel free to:
- Add new scenarios or templates
- Improve the UI/UX design
- Enhance accessibility features
- Add new export formats
- Optimize performance

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

For questions, suggestions, or issues:
1. Check the generated responses to ensure they meet your needs
2. Customize templates for your specific use cases
3. Test different empathy and urgency combinations
4. Use the export features to save your favorite configurations

---

**Built with ❤️ for customer success professionals who want to combine efficiency with genuine empathy.** 