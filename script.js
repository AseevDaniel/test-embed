// Empathy-Powered Playbook Generator - JavaScript

// Data Model
const appState = {
    scenario: '',
    empathy: 5,
    urgency: 5,
    csTier: 'smb',
    values: [],
    mode: 'single',
    responseType: 'email',
    // Success Plan specific
    customerOutcome: '',
    planDuration: 60,
    communicationFrequency: 'standard'
};

// Enhanced Template System with Conditional Logic
const templates = {
    // =============================================================================
    // ORIGINAL SCENARIOS (Backwards Compatible)
    // =============================================================================
    'upset-pricing': {
        email: {
            subject: {
                low: "Re: Pricing Information",
                medium: "Re: Your Pricing Concerns - Let's Discuss",
                high: "Re: Your Pricing Concerns - I'm Here to Help"
            },
            greeting: {
                low: "Hello [Customer],",
                medium: "Dear [Customer],",
                high: "Dear [Customer],"
            },
            empathy: {
                low: "I understand you have concerns about our pricing structure.",
                medium: "I completely understand your concerns about pricing - it's such an important consideration for any business decision.",
                high: "I really appreciate you taking the time to share your concerns with me. Pricing discussions can be challenging, and I genuinely want to make sure we address your specific situation with the care and attention it deserves."
            },
            acknowledgment: {
                low: "",
                medium: "Your feedback is valuable to us, and I want to ensure you have all the information you need.",
                high: "I can only imagine how frustrating this must be, especially when you're trying to make the best decision for your business. Your concerns are completely valid, and I'm here to help work through them together."
            },
            valueConnection: "As [tierDescription], I know that [valueProposition] is crucial for your success.",
            urgency: {
                low: "When you have a moment, I'd be happy to discuss how our solution delivers measurable value for organizations like yours.",
                medium: "I'd like to schedule a brief call this week to walk through a personalized ROI calculation for your specific use case.",
                high: "Given the potential impact on your business operations, I'd recommend we address this immediately. Can we schedule a 15-minute call today to discuss your specific situation and find a solution?"
            },
            closing: {
                low: "Please feel free to reach out with any questions.\n\nBest regards,",
                medium: "I'm here to help and look forward to hearing from you.\n\nWarm regards,",
                high: "I'm personally committed to making this right and ensuring you feel confident in your decision.\n\nWith sincere regards,"
            }
        },
        call: {
            opening: {
                low: "Hi [Customer], I'm calling regarding your pricing inquiry.",
                medium: "Hi [Customer], thanks for sharing your pricing concerns with us. I'd like to walk through this together.",
                high: "Hi [Customer], I want to personally thank you for your honest feedback about pricing. I really value your perspective and I'm here to make sure we find the best solution for your needs."
            },
            acknowledgment: {
                low: "I understand you have questions about our pricing structure.",
                medium: "I completely understand that pricing is a critical factor in your decision-making process.",
                high: "I can really appreciate how important it is to get the pricing right for your business, and I want you to feel completely confident in any decision you make."
            },
            valueDiscussion: "Let me walk you through how [valueProposition] translates into real value for [tierDescription] like yours.",
            urgency: {
                low: "I wanted to see if we could explore some options that might work better for your budget.",
                medium: "I think there are some solutions we haven't discussed yet that could address your specific concerns.",
                high: "I'm calling right away because I believe we can find a solution today that will demonstrate clear ROI for your business."
            },
            nextSteps: {
                low: "Would you like me to send over some additional information, or would you prefer to continue this conversation over email?",
                medium: "I'd love to schedule a follow-up call this week to dive deeper into the numbers. What works best for your schedule?",
                high: "Can we set up a 15-minute call today to review a customized pricing proposal? I have some time slots available this afternoon."
            }
        },
        nudge: {
            title: {
                low: "Pricing Questions?",
                medium: "Let's Talk Pricing",
                high: "We're Here to Help with Pricing"
            },
            message: {
                low: "Have questions about our pricing? Let's connect.",
                medium: "We understand pricing is important. Let's find the right solution for you.",
                high: "We're committed to helping you make the best decision for your business. Let's discuss your specific pricing needs."
            },
            cta: {
                low: "Schedule a consultation",
                medium: "Book a pricing call this week",
                high: "Speak with our team today"
            }
        }
    },
    
    'inactive-onboarding': {
        email: {
            subject: {
                low: "Getting Started with [Product]",
                medium: "Let's Complete Your Setup - We're Here to Help",
                high: "Your Success Matters to Us - Let's Get You Started"
            },
            greeting: {
                low: "Hi [Customer],",
                medium: "Hello [Customer],",
                high: "Dear [Customer],"
            },
            empathy: {
                low: "I noticed you haven't completed your onboarding process yet.",
                medium: "I wanted to check in and see how your onboarding experience has been going so far.",
                high: "I hope you're doing well! I noticed you started your journey with us, and I wanted to personally reach out because I genuinely care about making sure your experience is as smooth and successful as possible."
            },
            acknowledgment: {
                low: "Getting started with new software can take time.",
                medium: "I understand that getting started with new tools can sometimes feel overwhelming, and that's completely normal.",
                high: "I completely understand that onboarding can sometimes feel like a lot to take in, especially when you're juggling so many other priorities. Many of our most successful customers felt the same way when they first started."
            },
            valueConnection: "I want to make sure you're able to experience the [valueProposition] that [tierDescription] like yours typically see within the first few weeks.",
            urgency: {
                low: "When you're ready, I've prepared some resources to help you get the most out of your investment.",
                medium: "I'd love to help you get the most value from your investment. Could we schedule a quick 15-minute setup call this week?",
                high: "To ensure you start seeing results immediately, I'd like to schedule a priority onboarding session within the next 24 hours. I have some time slots available tomorrow."
            },
            closing: {
                low: "Feel free to reach out if you need any assistance.\n\nBest regards,",
                medium: "I'm here to help make this as easy as possible for you.\n\nWarm regards,",
                high: "I'm personally committed to your success and I'm here to support you every step of the way.\n\nWith dedication to your success,"
            }
        },
        call: {
            opening: {
                low: "Hi [Customer], I'm calling to check on your onboarding progress.",
                medium: "Hi [Customer], I wanted to personally check in on how your onboarding experience has been going.",
                high: "Hi [Customer], I hope you're having a wonderful day! I wanted to reach out personally because I genuinely care about making sure your experience with us is exceptional from day one."
            },
            acknowledgment: {
                low: "I understand getting started with new software takes time.",
                medium: "I know that diving into a new platform can feel like a lot at first, and that's totally understandable.",
                high: "I completely get that onboarding can sometimes feel overwhelming, especially when you have so much else on your plate. You're definitely not alone in feeling this way."
            },
            valueDiscussion: "I want to make sure you're positioned to see the [valueProposition] that other [tierDescription] experience within their first month.",
            urgency: {
                low: "I wanted to offer some personalized guidance to help you get the most out of the platform.",
                medium: "I'd like to help you complete your setup so you can start seeing the benefits as quickly as possible.",
                high: "I'm calling today because I want to make sure you're up and running immediately so you don't miss out on any of the value you're paying for."
            },
            nextSteps: {
                low: "Would you prefer a quick call to walk through the setup, or would you like me to send you some personalized resources?",
                medium: "What would work better for you - a screen share session this week, or should I send you a customized setup guide?",
                high: "I'd love to jump on a screen share with you today if possible. Do you have 15 minutes this afternoon to get everything configured?"
            }
        },
        nudge: {
            title: {
                low: "Complete Your Setup",
                medium: "Let's Get You Started",
                high: "Your Success is Our Priority"
            },
            message: {
                low: "Finish your onboarding to unlock all features.",
                medium: "We're here to help you succeed. Let's complete your personalized setup.",
                high: "Your success truly matters to us. Let's finish your setup together and get you seeing results."
            },
            cta: {
                low: "Resume setup",
                medium: "Complete onboarding this week",
                high: "Get started today"
            }
        }
    },
    
    'confused-feature': {
        email: {
            subject: {
                low: "Re: Feature Clarification",
                medium: "Re: Your Feature Questions - Let's Clear This Up",
                high: "Re: Your Feature Questions - I'm Here to Help You Succeed"
            },
            greeting: {
                low: "Hi [Customer],",
                medium: "Hello [Customer],",
                high: "Dear [Customer],"
            },
            empathy: {
                low: "I see you're having questions about our features. Let me provide some clarification.",
                medium: "I understand that some of our features might not be immediately clear - that's completely normal and you're asking great questions!",
                high: "I completely understand your confusion, and I want you to know that many of our most successful customers had similar questions when they started. You're definitely not alone in this, and I'm so glad you reached out!"
            },
            acknowledgment: {
                low: "Feature complexity can be confusing at first.",
                medium: "I know that diving into new functionality can feel overwhelming, especially when you want to make sure you're using everything to its full potential.",
                high: "I really appreciate you taking the time to ask these questions. It shows you're committed to getting the most value from our platform, and that's exactly the kind of thinking that leads to great results."
            },
            valueConnection: "I want to make sure you fully understand how this feature delivers [valueProposition] for [tierDescription] like yours.",
            urgency: {
                low: "I'm here to help explain how this feature can benefit your workflow whenever you're ready to dive in.",
                medium: "Let's schedule a brief demo this week so you can see exactly how this works for your specific use case.",
                high: "I'd like to jump on a screen share today to walk through this feature so you can start using it right away and see immediate results."
            },
            closing: {
                low: "Let me know if you have any other questions.\n\nBest regards,",
                medium: "I'm excited to help you master these features.\n\nWarm regards,",
                high: "I'm personally committed to making sure you feel confident and successful with every feature.\n\nWith enthusiasm for your success,"
            }
        },
        call: {
            opening: {
                low: "Hi [Customer], I understand you have questions about our features.",
                medium: "Hi [Customer], I totally get that our features can seem complex at first glance, but I'm here to make it simple.",
                high: "Hi [Customer], I really appreciate you reaching out with your questions. I absolutely love helping customers discover how powerful these features can be once you understand them."
            },
            acknowledgment: {
                low: "Questions about functionality are completely normal.",
                medium: "I know it can feel like there's a lot to learn, but that's exactly why I'm here to help.",
                high: "Your questions show me that you're really thinking about how to get the most value, and I think that's fantastic. Let's make sure you feel completely confident."
            },
            valueDiscussion: "Let me show you exactly how this feature delivers [valueProposition] for [tierDescription] like yours.",
            urgency: {
                low: "I wanted to walk you through how this feature works and how it fits into your workflow.",
                medium: "I'd like to show you exactly how this feature can solve your specific challenge and streamline your process.",
                high: "I'm calling right away because I want to clear up any confusion immediately so you can start benefiting from this feature today."
            },
            nextSteps: {
                low: "Would you prefer a quick walkthrough now, or should I send you a detailed guide you can review at your own pace?",
                medium: "What would work better - a screen share this week to go through it together, or should I create a custom demo for your specific use case?",
                high: "Can we do a quick screen share right now? I have 15 minutes and I think I can get you completely up to speed."
            }
        },
        nudge: {
            title: {
                low: "Feature Questions?",
                medium: "Let's Explore Features Together",
                high: "Your Questions Matter - Let's Connect"
            },
            message: {
                low: "Need help understanding a feature? Get quick answers from our team.",
                medium: "We're here to help you understand every feature and unlock its full potential.",
                high: "Your questions matter to us. Let's explore these features together and find exactly what works best for your needs."
            },
            cta: {
                low: "Get help now",
                medium: "Schedule a feature walkthrough",
                high: "Connect with our team today"
            }
        }
    },
    
    'ready-upsell': {
        email: {
            subject: {
                low: "Unlock Additional Value with [Product]",
                medium: "Exciting Growth Opportunities for Your Success",
                high: "Your Success Story Continues - Let's Accelerate Together!"
            },
            greeting: {
                low: "Hi [Customer],",
                medium: "Hello [Customer],",
                high: "Dear [Customer],"
            },
            empathy: {
                low: "Based on your usage patterns, I believe you're ready to explore our premium features.",
                medium: "I've been watching your success with our platform, and I'm genuinely excited about the possibilities for your continued growth!",
                high: "I'm absolutely thrilled to see how well you're doing with our platform! Your success truly brightens my day, and I can't help but think about the exciting opportunities to accelerate your progress even further."
            },
            acknowledgment: {
                low: "Your current results show you're maximizing the core features.",
                medium: "You've clearly mastered the fundamentals and are seeing great results. That tells me you're ready for the next level.",
                high: "Watching your journey has been incredible. You've not only mastered our platform but you're achieving the kind of results that make our whole team proud. You're exactly the type of customer our premium features were designed for."
            },
            valueConnection: "Our premium features are specifically designed to deliver enhanced [valueProposition] for successful [tierDescription] like yours.",
            urgency: {
                low: "When you're ready to explore advanced capabilities, I'm here to guide you through the options.",
                medium: "I'd love to show you some advanced features that could take your results to the next level this month.",
                high: "I've identified some premium features that could dramatically amplify your current success - can we discuss these today while your momentum is strong?"
            },
            closing: {
                low: "Looking forward to your continued success.\n\nBest regards,",
                medium: "Excited to help you reach new heights!\n\nWarm regards,",
                high: "I'm personally invested in your continued success and can't wait to see what we can achieve together.\n\nWith excitement for your future,"
            }
        },
        call: {
            opening: {
                low: "Hi [Customer], I see you're getting excellent results. Let's discuss some expansion opportunities.",
                medium: "Hi [Customer], I'm really impressed with how you're using our platform. I have some exciting ideas for taking your success even further.",
                high: "Hi [Customer], I am genuinely excited about your incredible success! I've been thinking about your specific situation and I believe there are some amazing opportunities to amplify your already impressive results."
            },
            acknowledgment: {
                low: "Your usage data shows you're ready for advanced features.",
                medium: "You've clearly gotten tremendous value from our core platform, which is exactly what we love to see.",
                high: "Your success story is honestly inspiring. You've taken everything we've provided and turned it into real, measurable results. That kind of success deserves to be celebrated and expanded upon."
            },
            valueDiscussion: "Let me show you how our premium features can deliver even greater [valueProposition] for [tierDescription] who are performing at your level.",
            urgency: {
                low: "I wanted to share some additional capabilities that align perfectly with your current goals and trajectory.",
                medium: "I'd like to discuss some premium features that could accelerate your growth and help you capitalize on your current momentum.",
                high: "I'm calling because I see a time-sensitive opportunity to significantly boost your already strong results with some advanced features that are perfect for where you are right now."
            },
            nextSteps: {
                low: "Would you like me to send you information about our premium tiers, or would you prefer to schedule a demo?",
                medium: "What would work better - a quick demo this week to show you the premium features, or should I prepare a custom proposal based on your current usage?",
                high: "Can we schedule a brief call today to discuss how these premium features could impact your results? I have some time this afternoon and I think you'll be excited about what I can show you."
            }
        },
        nudge: {
            title: {
                low: "Ready for Premium Features?",
                medium: "Accelerate Your Success",
                high: "Your Success Story Continues!"
            },
            message: {
                low: "You're crushing it with our core features. Ready to explore premium capabilities?",
                medium: "You're doing amazing! Discover premium features designed to accelerate your success even further.",
                high: "Your success truly inspires us! Let's explore premium features specifically designed for high-performing customers like you."
            },
            cta: {
                low: "Explore premium options",
                medium: "Unlock advanced features this month",
                high: "Amplify your success today"
            }
        }
    },
    
    'negative-feedback': {
        email: {
            subject: {
                low: "Re: Your Feedback - Let's Address This",
                medium: "Re: Your Concerns - I'm Here to Make This Right",
                high: "Re: Your Experience - I'm Personally Committed to Resolving This"
            },
            greeting: {
                low: "Hello [Customer],",
                medium: "Dear [Customer],",
                high: "Dear [Customer],"
            },
            empathy: {
                low: "I've received your feedback and want to address your concerns directly.",
                medium: "Thank you for sharing your honest feedback with us. I take your concerns seriously and genuinely want to make things right.",
                high: "I want to start by sincerely apologizing for your disappointing experience. Your feedback is incredibly valuable to us, and I'm personally committed to not only making this right but ensuring this type of situation doesn't happen to any of our customers again."
            },
            acknowledgment: {
                low: "Your experience fell short of our standards.",
                medium: "I understand that we didn't meet your expectations, and I want you to know that this is not the experience we strive to provide.",
                high: "I can only imagine how frustrating and disappointing this must have been for you. Your trust in us was clearly misplaced in this instance, and I take full responsibility for that. Every customer deserves better than what you experienced."
            },
            valueConnection: "We're committed to delivering the [valueProposition] that [tierDescription] like yours deserve and expect.",
            urgency: {
                low: "I'm here to help resolve any issues you're experiencing and restore your confidence in our service.",
                medium: "I'd like to schedule a call this week to understand your concerns better and work together on immediate solutions.",
                high: "I want to address your concerns immediately and personally. Can we schedule a call today to discuss how we can resolve this situation and make things right?"
            },
            closing: {
                low: "I'm committed to resolving this for you.\n\nSincerely,",
                medium: "I'm personally invested in making this right and earning back your trust.\n\nWith sincere apologies,",
                high: "I'm personally committed to not only resolving this but to ensuring your future experience exceeds your expectations in every way.\n\nWith heartfelt apologies and dedication to your satisfaction,"
            }
        },
        call: {
            opening: {
                low: "Hi [Customer], I'm calling regarding your recent feedback. Thank you for bringing these concerns to our attention.",
                medium: "Hi [Customer], I really appreciate you taking the time to share your feedback with us. Your honesty helps us improve.",
                high: "Hi [Customer], I want to personally apologize for your experience and thank you for bringing this to our attention. Your feedback is a gift, even when it's difficult to hear, and I'm dedicated to making this right."
            },
            acknowledgment: {
                low: "I understand your experience wasn't what you expected.",
                medium: "I can see that we really let you down, and I want to acknowledge that your frustration is completely justified.",
                high: "I want to acknowledge that we absolutely failed you in this situation. Your disappointment is completely valid, and honestly, I would feel the same way if I were in your position. This is not the standard we hold ourselves to."
            },
            valueDiscussion: "I want to make sure we deliver the [valueProposition] that [tierDescription] like yours rightfully expect from us.",
            urgency: {
                low: "I wanted to understand your concerns better and explore how we can improve your experience going forward.",
                medium: "I'd like to work with you to resolve these issues immediately and put measures in place to prevent this from happening again.",
                high: "I'm calling immediately because your experience matters deeply to us and I want to resolve this right away. Your satisfaction is my top priority."
            },
            nextSteps: {
                low: "What would be most helpful for you right now - should we focus on resolving the immediate issue or discussing how to prevent this in the future?",
                medium: "I'd like to propose some immediate solutions and also schedule a follow-up to ensure everything is working perfectly. What would work best for your schedule?",
                high: "I want to make this right immediately. Can we address the core issue right now, and then I'd like to schedule a follow-up to ensure you're completely satisfied?"
            }
        },
        nudge: {
            title: {
                low: "Let's Address Your Concerns",
                medium: "Your Feedback Matters - Let's Connect",
                high: "We're Here to Make This Right"
            },
            message: {
                low: "We've received your feedback and want to address your concerns directly. Let's work together on solutions.",
                medium: "Your feedback helps us improve and we take it seriously. Let's connect and work together to resolve your concerns.",
                high: "We deeply value your feedback and sincerely want to make things right. Your satisfaction matters to us, and we're committed to earning back your trust."
            },
            cta: {
                low: "Discuss solutions",
                medium: "Schedule a feedback session",
                high: "Connect with our team immediately"
            }
        }
    },
    
    // =============================================================================
    // EXTENDED SCENARIOS (New Customer Success Use Cases)
    // =============================================================================
    
    'technical-issue': {
        email: {
            subject: {
                low: "Re: Technical Support Request",
                medium: "Re: Technical Issue - Let's Get This Resolved",
                high: "Re: Urgent Technical Issue - We're On It"
            },
            greeting: {
                low: "Hello [Customer],",
                medium: "Hi [Customer],",
                high: "Dear [Customer],"
            },
            empathy: {
                low: "I've received your technical support request and I'm here to help.",
                medium: "I understand you're experiencing a technical issue - I know how frustrating that can be.",
                high: "I completely understand how disruptive technical issues can be to your workflow. I've been in similar situations myself, and I want to get this resolved for you as quickly as possible."
            },
            acknowledgment: {
                low: "Technical issues can impact your productivity.",
                medium: "I know that when technology isn't working properly, it can really slow down your progress.",
                high: "Technical problems at the worst possible time can be incredibly stressful, especially when you have deadlines to meet. Your frustration is completely valid."
            },
            valueConnection: "I want to ensure that [valueProposition] continues to work seamlessly for [tierDescription] like yours.",
            urgency: {
                low: "I'll investigate this issue and get back to you with a solution.",
                medium: "Let me prioritize this and provide you with a resolution within 24 hours.",
                high: "This is my top priority. I'm escalating this immediately to our technical team for urgent resolution."
            },
            closing: {
                low: "I'll keep you updated on our progress.\n\nBest regards,",
                medium: "I'm committed to getting this fixed quickly for you.\n\nWith focus on your success,",
                high: "I'm personally overseeing this issue until it's completely resolved.\n\nWith urgent attention to your needs,"
            }
        },
        call: {
            opening: {
                low: "Hi [Customer], I'm calling about your technical issue.",
                medium: "Hi [Customer], I wanted to personally address the technical problem you're experiencing.",
                high: "Hi [Customer], I'm calling immediately because I know this technical issue is impacting your work right now."
            },
            acknowledgment: {
                low: "I understand you're having technical difficulties.",
                medium: "I can imagine how frustrating it must be when the system isn't working properly.",
                high: "I completely understand your frustration - technical issues at critical moments can be incredibly disruptive to your business."
            },
            valueDiscussion: "Let me make sure we restore the [valueProposition] you depend on as [tierDescription].",
            urgency: {
                low: "I want to walk through some troubleshooting steps with you.",
                medium: "Let me help you resolve this issue right now over the phone.",
                high: "I'm connecting you directly with our senior technical team for immediate resolution."
            },
            nextSteps: {
                low: "Can we schedule a troubleshooting session at your convenience?",
                medium: "Would you prefer to work through this now, or should I send you detailed steps to try?",
                high: "I have a technical specialist available right now - can we get them on the line immediately?"
            }
        },
        nudge: {
            title: {
                low: "Technical Support Available",
                medium: "Need Technical Help?",
                high: "Urgent Technical Support"
            },
            message: {
                low: "Our technical team is ready to help resolve any issues you're experiencing.",
                medium: "Having technical difficulties? Our expert team is standing by to help you get back on track.",
                high: "Technical issues disrupting your work? Get immediate expert support from our specialized team."
            },
            cta: {
                low: "Contact support",
                medium: "Get help now",
                high: "Emergency support"
            }
        }
    },
    
    'integration-question': {
        email: {
            subject: {
                low: "Re: Integration Support",
                medium: "Re: Integration Questions - Let's Connect Your Systems",
                high: "Re: Integration Priority - Seamless Connectivity Awaits"
            },
            greeting: {
                low: "Hi [Customer],",
                medium: "Hello [Customer],",
                high: "Dear [Customer],"
            },
            empathy: {
                low: "I see you have questions about integrating our platform with your existing systems.",
                medium: "I understand that integration planning can feel complex - you want to make sure everything works together seamlessly.",
                high: "I completely understand your integration concerns. Connecting new systems with your existing workflow is crucial, and I want to make sure we get this exactly right for your specific environment."
            },
            acknowledgment: {
                low: "Integration planning requires careful consideration.",
                medium: "I know that successful integrations are critical for your workflow efficiency.",
                high: "You're absolutely right to carefully plan your integrations. A well-executed integration can transform your productivity, while a poor one can create headaches."
            },
            valueConnection: "Our integration capabilities are designed to enhance [valueProposition] for [tierDescription] with complex technical requirements.",
            urgency: {
                low: "I'm here to help you understand all available integration options.",
                medium: "Let's schedule an integration planning session this week to map out your ideal setup.",
                high: "I'd like to connect you with our integration specialists today to fast-track your implementation."
            },
            closing: {
                low: "Looking forward to helping you connect your systems.\n\nBest regards,",
                medium: "Excited to help you create seamless workflows.\n\nTechnically yours,",
                high: "Committed to delivering the perfect integration solution for your needs.\n\nWith technical excellence,"
            }
        },
        call: {
            opening: {
                low: "Hi [Customer], I understand you're looking into integration options.",
                medium: "Hi [Customer], I'd love to discuss your integration requirements and show you what's possible.",
                high: "Hi [Customer], I'm excited to help you create the perfect integration setup for your organization."
            },
            acknowledgment: {
                low: "Integration questions are important to address properly.",
                medium: "I know that getting integrations right is crucial for your operational efficiency.",
                high: "You're absolutely smart to thoroughly evaluate integration options - this decision will impact your entire workflow."
            },
            valueDiscussion: "Let me show you how our integration capabilities can enhance [valueProposition] for [tierDescription] like yours.",
            urgency: {
                low: "I wanted to understand your current tech stack and integration needs.",
                medium: "I'd like to walk through your specific integration requirements and show you our capabilities.",
                high: "I'm calling because I believe we can design an integration solution that will significantly streamline your operations."
            },
            nextSteps: {
                low: "Would you like me to send you our integration documentation, or should we schedule a technical review?",
                medium: "What would work better - a demo of our integration capabilities this week, or a technical consultation call?",
                high: "Can I connect you with our integration architect today? They can design a custom solution for your exact requirements."
            }
        },
        nudge: {
            title: {
                low: "Integration Options Available",
                medium: "Seamless System Integration",
                high: "Connect Everything Perfectly"
            },
            message: {
                low: "Explore our comprehensive integration options to connect all your essential tools.",
                medium: "Create seamless workflows by integrating our platform with your existing systems.",
                high: "Transform your productivity with powerful integrations designed for your success."
            },
            cta: {
                low: "View integrations",
                medium: "Explore integration options",
                high: "Design your integration"
            }
        }
    },
    
    'performance-concern': {
        email: {
            subject: {
                low: "Re: Performance Questions",
                medium: "Re: Performance Optimization - Let's Boost Your Speed",
                high: "Re: Performance Priority - Maximizing Your System Speed"
            },
            greeting: {
                low: "Hello [Customer],",
                medium: "Hi [Customer],",
                high: "Dear [Customer],"
            },
            empathy: {
                low: "I understand you have concerns about system performance.",
                medium: "I know that performance is crucial for your daily operations - slow systems can be really frustrating.",
                high: "I completely understand your performance concerns. When systems run slowly, it affects everything you're trying to accomplish, and that's incredibly frustrating for busy professionals like yourself."
            },
            acknowledgment: {
                low: "Performance optimization is important for productivity.",
                medium: "You're absolutely right that optimal performance is essential for getting work done efficiently.",
                high: "Performance issues can be one of the most disruptive problems you face. Every second counts when you're trying to be productive, and I take your concerns very seriously."
            },
            valueConnection: "Optimal performance is essential for [tierDescription] to fully realize [valueProposition] from our platform.",
            urgency: {
                low: "I'd like to review your system configuration and identify optimization opportunities.",
                medium: "Let me conduct a performance audit this week and provide specific recommendations.",
                high: "I'm prioritizing a comprehensive performance review for your account immediately."
            },
            closing: {
                low: "I'm committed to optimizing your experience.\n\nBest regards,",
                medium: "Let's get your system running at peak performance.\n\nWith optimization focus,",
                high: "I'm personally dedicated to delivering exceptional performance for your critical work.\n\nWith performance excellence,"
            }
        },
        call: {
            opening: {
                low: "Hi [Customer], I wanted to discuss your performance concerns.",
                medium: "Hi [Customer], I understand you're experiencing some performance challenges - let's address those.",
                high: "Hi [Customer], I'm calling because performance optimization is critical for your success, and I want to solve this immediately."
            },
            acknowledgment: {
                low: "Performance issues can impact your daily workflow.",
                medium: "I completely understand how performance bottlenecks can slow down your entire team.",
                high: "Performance problems can be incredibly disruptive to business operations, and I want you to know that your concerns are my top priority."
            },
            valueDiscussion: "Let me ensure you're getting optimal performance from [valueProposition] that [tierDescription] like yours depend on.",
            urgency: {
                low: "I'd like to review your setup and identify areas for improvement.",
                medium: "Let me run some diagnostics and provide you with optimization recommendations this week.",
                high: "I'm connecting you with our performance optimization team right now to address this immediately."
            },
            nextSteps: {
                low: "Would you prefer a performance review session, or should I send you optimization tips to try?",
                medium: "What works better - a live performance audit this week, or detailed optimization recommendations?",
                high: "Can we schedule an immediate performance optimization session? I have specialists available today."
            }
        },
        nudge: {
            title: {
                low: "Performance Optimization Available",
                medium: "Boost Your System Speed",
                high: "Maximum Performance Awaits"
            },
            message: {
                low: "Optimize your system performance with our expert recommendations and support.",
                medium: "Unlock faster speeds and better efficiency with professional performance optimization.",
                high: "Experience lightning-fast performance with our dedicated optimization specialists."
            },
            cta: {
                low: "Learn optimization tips",
                medium: "Optimize performance now",
                high: "Get maximum speed"
            }
        }
    },
    
    'renewal-discussion': {
        email: {
            subject: {
                low: "Your Upcoming Renewal",
                medium: "Let's Discuss Your Renewal - Continuing Your Success",
                high: "Your Success Journey Continues - Renewal Planning"
            },
            greeting: {
                low: "Hi [Customer],",
                medium: "Hello [Customer],",
                high: "Dear [Customer],"
            },
            empathy: {
                low: "I wanted to reach out regarding your upcoming renewal.",
                medium: "I hope you've been getting great value from our platform as your renewal approaches.",
                high: "I've been thinking about your incredible journey with us, and I'm genuinely excited to discuss how we can continue supporting your success as we approach your renewal."
            },
            acknowledgment: {
                low: "Renewal decisions require careful consideration.",
                medium: "I know that renewal decisions involve evaluating the value you've received and your future needs.",
                high: "Renewal conversations are important opportunities to reflect on achievements and plan for even greater success ahead."
            },
            valueConnection: "I want to ensure that [valueProposition] continues to drive success for [tierDescription] like yours.",
            urgency: {
                low: "I'm here to discuss your renewal options and answer any questions.",
                medium: "Let's schedule time this month to review your success and discuss renewal options.",
                high: "I'd love to celebrate your achievements and ensure seamless continuity with priority renewal planning."
            },
            closing: {
                low: "Looking forward to our continued partnership.\n\nBest regards,",
                medium: "Excited to continue this successful partnership.\n\nWith appreciation,",
                high: "Thrilled to support your continued growth and success.\n\nWith genuine excitement for what's ahead,"
            }
        },
        call: {
            opening: {
                low: "Hi [Customer], I wanted to discuss your upcoming renewal.",
                medium: "Hi [Customer], I'd love to talk about your renewal and how we can continue supporting your success.",
                high: "Hi [Customer], I'm so excited to discuss your renewal and all the amazing opportunities ahead for your continued growth."
            },
            acknowledgment: {
                low: "Renewal planning is an important business decision.",
                medium: "I know renewal decisions involve weighing the value you've received against your future goals.",
                high: "This renewal represents an exciting milestone in your success journey, and I want to make sure we're perfectly aligned for your next phase of growth."
            },
            valueDiscussion: "Let's review how [valueProposition] has impacted your success and discuss future opportunities for [tierDescription] like yours.",
            urgency: {
                low: "I wanted to understand your experience and discuss renewal options.",
                medium: "I'd like to review your achievements and ensure your renewal meets your evolving needs.",
                high: "I'm calling because I see tremendous opportunities for your continued success, and I want to ensure seamless renewal planning."
            },
            nextSteps: {
                low: "Would you prefer to discuss renewal terms over email, or should we schedule a planning meeting?",
                medium: "What works better - a renewal planning session this week, or should I prepare a customized proposal first?",
                high: "Can we schedule a comprehensive renewal strategy session? I'd love to show you exciting new opportunities."
            }
        },
        nudge: {
            title: {
                low: "Renewal Time",
                medium: "Continue Your Success",
                high: "Your Success Story Continues"
            },
            message: {
                low: "Your renewal is approaching. Let's discuss options for continued access to our platform.",
                medium: "Ready to continue your success journey? Let's plan your renewal together.",
                high: "Your amazing progress deserves to continue! Let's design the perfect renewal for your next chapter."
            },
            cta: {
                low: "Discuss renewal",
                medium: "Plan your renewal",
                high: "Continue your success"
            }
        }
    },
    
    'billing-inquiry': {
        email: {
            subject: {
                low: "Re: Billing Question",
                medium: "Re: Billing Inquiry - Let's Clarify Everything",
                high: "Re: Billing Priority - Complete Clarity and Resolution"
            },
            greeting: {
                low: "Hello [Customer],",
                medium: "Hi [Customer],",
                high: "Dear [Customer],"
            },
            empathy: {
                low: "I received your billing inquiry and I'm here to help clarify things for you.",
                medium: "I understand you have questions about your billing - let me help clear everything up for you.",
                high: "I completely understand that billing questions can be stressful. Financial clarity is incredibly important, and I want to make sure you have complete confidence in every charge."
            },
            acknowledgment: {
                low: "Billing questions are important to address promptly.",
                medium: "You're absolutely right to ask for clarification on your billing - transparency is crucial.",
                high: "Thank you for bringing this to my attention. Clear, accurate billing is fundamental to trust, and I take your inquiry very seriously."
            },
            valueConnection: "I want to ensure complete transparency about how [valueProposition] translates to your investment as [tierDescription].",
            urgency: {
                low: "I'll review your account and provide detailed clarification.",
                medium: "Let me investigate this immediately and provide you with a complete breakdown within 24 hours.",
                high: "I'm escalating this to our billing specialists for immediate resolution and complete transparency."
            },
            closing: {
                low: "I'm committed to resolving your billing questions.\n\nBest regards,",
                medium: "Thank you for giving me the opportunity to clarify this for you.\n\nWith transparency,",
                high: "I'm personally ensuring complete billing clarity and resolution for you.\n\nWith commitment to your satisfaction,"
            }
        },
        call: {
            opening: {
                low: "Hi [Customer], I'm calling about your billing inquiry.",
                medium: "Hi [Customer], I wanted to personally address your billing question and make sure everything is clear.",
                high: "Hi [Customer], I'm calling immediately because billing clarity is so important, and I want to resolve this completely for you."
            },
            acknowledgment: {
                low: "I understand you have questions about your billing.",
                medium: "Billing questions are completely reasonable - you deserve full transparency about your investment.",
                high: "You're absolutely right to seek clarification on billing matters. Financial transparency is fundamental to our relationship."
            },
            valueDiscussion: "Let me explain exactly how your investment in [valueProposition] works for [tierDescription] like yours.",
            urgency: {
                low: "I want to walk through your billing details and answer any questions.",
                medium: "Let me review your account right now and provide complete clarity on all charges.",
                high: "I'm connecting you with our billing specialist immediately to resolve this with complete transparency."
            },
            nextSteps: {
                low: "Would you like me to email you a detailed breakdown, or should we review it together now?",
                medium: "What would be most helpful - a comprehensive billing review now, or detailed documentation sent to you?",
                high: "Can I get our senior billing specialist on the line right now to provide immediate clarity?"
            }
        },
        nudge: {
            title: {
                low: "Billing Support Available",
                medium: "Billing Questions? We're Here",
                high: "Complete Billing Clarity"
            },
            message: {
                low: "Have billing questions? Our team is ready to provide clear answers and support.",
                medium: "Need billing clarification? Get transparent answers from our dedicated billing support team.",
                high: "Billing questions deserve immediate, clear answers. Our specialists are standing by to help."
            },
            cta: {
                low: "Contact billing support",
                medium: "Get billing clarity",
                high: "Resolve billing now"
            }
        }
    },
    
    'data-migration': {
        email: {
            subject: {
                low: "Re: Data Migration Support",
                medium: "Re: Data Migration - Let's Ensure Seamless Transfer",
                high: "Re: Critical Data Migration - Expert Support Priority"
            },
            greeting: {
                low: "Hello [Customer],",
                medium: "Hi [Customer],",
                high: "Dear [Customer],"
            },
            empathy: {
                low: "I understand you need assistance with data migration.",
                medium: "I know that data migration can feel overwhelming - there's so much important information to transfer safely.",
                high: "I completely understand your concerns about data migration. Your data is absolutely critical to your business, and the thought of moving it can be nerve-wracking. I want you to feel completely confident throughout this process."
            },
            acknowledgment: {
                low: "Data migration requires careful planning and execution.",
                medium: "You're absolutely right to be thorough about data migration - it's one of the most critical parts of any transition.",
                high: "Data migration is serious business, and your careful approach shows you understand how important your data integrity is. I deeply respect that, and I want to make this process as smooth as possible."
            },
            valueConnection: "Our migration expertise ensures [valueProposition] continues uninterrupted for [tierDescription] during this critical transition.",
            urgency: {
                low: "I'm here to guide you through the migration process step by step.",
                medium: "Let me connect you with our migration specialists this week to plan your seamless transition.",
                high: "I'm assembling our senior migration team immediately to ensure your data transfer is flawless and secure."
            },
            closing: {
                low: "I'm committed to ensuring a smooth migration.\n\nBest regards,",
                medium: "Your data is safe with our expert migration team.\n\nWith security focus,",
                high: "I'm personally overseeing your migration to ensure complete success and security.\n\nWith dedicated migration expertise,"
            }
        },
        call: {
            opening: {
                low: "Hi [Customer], I understand you need help with data migration.",
                medium: "Hi [Customer], I'd love to walk you through our data migration process and address any concerns.",
                high: "Hi [Customer], data migration is critical to your success, and I want to personally ensure we handle this perfectly for you."
            },
            acknowledgment: {
                low: "Data migration is an important process that requires careful attention.",
                medium: "I completely understand that moving your valuable data requires the highest level of care and expertise.",
                high: "Your data represents years of hard work and business value. I take the responsibility of migration very seriously, and I'm here to ensure everything goes perfectly."
            },
            valueDiscussion: "Let me explain how our migration process protects [valueProposition] for [tierDescription] like yours.",
            urgency: {
                low: "I want to understand your migration needs and timeline.",
                medium: "Let me connect you with our migration specialists to plan this carefully.",
                high: "I'm bringing in our senior migration team immediately to design a flawless transition plan for you."
            },
            nextSteps: {
                low: "Would you prefer a migration planning session, or should I send you our process documentation?",
                medium: "What works better - a detailed migration consultation this week, or a technical assessment first?",
                high: "Can I get our migration architect on the line right now to start planning your secure data transfer?"
            }
        },
        nudge: {
            title: {
                low: "Data Migration Support",
                medium: "Seamless Data Migration",
                high: "Expert Migration Services"
            },
            message: {
                low: "Need help migrating your data? Our experts ensure secure, seamless transfers.",
                medium: "Migrate your data with confidence using our proven, secure migration process.",
                high: "Trust your critical data migration to our certified experts for guaranteed success."
            },
            cta: {
                low: "Learn about migration",
                medium: "Plan your migration",
                high: "Get expert migration help"
            }
        }
    },
    
    'competitive-concern': {
        email: {
            subject: {
                low: "Re: Competitive Questions",
                medium: "Re: Your Competitive Analysis - Let's Discuss Our Advantages",
                high: "Re: Competitive Landscape - Why We're Your Best Choice"
            },
            greeting: {
                low: "Hi [Customer],",
                medium: "Hello [Customer],",
                high: "Dear [Customer],"
            },
            empathy: {
                low: "I understand you're evaluating competitive options.",
                medium: "I know that choosing the right solution involves careful comparison - it's a big decision.",
                high: "I completely understand why you're doing your due diligence on competitive options. This is such an important decision for your business, and you want to make sure you're choosing the absolute best solution."
            },
            acknowledgment: {
                low: "Competitive analysis is part of making informed decisions.",
                medium: "You're absolutely smart to evaluate all your options thoroughly before making a commitment.",
                high: "I really admire your thorough approach to evaluation. The fact that you're carefully comparing solutions shows you're a thoughtful decision-maker who wants the best for your organization."
            },
            valueConnection: "Let me show you exactly why [valueProposition] makes us the superior choice for [tierDescription] like yours.",
            urgency: {
                low: "I'm here to answer any competitive questions you might have.",
                medium: "I'd love to schedule a competitive comparison session this week to show you our unique advantages.",
                high: "I want to demonstrate immediately why we're the clear leader and best choice for your specific needs."
            },
            closing: {
                low: "I'm confident in our competitive advantages.\n\nBest regards,",
                medium: "I look forward to showing you why we're the best choice.\n\nWith competitive confidence,",
                high: "I'm excited to prove why we're not just competitive, but the clear leader in delivering value.\n\nWith complete confidence in our superiority,"
            }
        },
        call: {
            opening: {
                low: "Hi [Customer], I understand you're evaluating competitive options.",
                medium: "Hi [Customer], I'd love to discuss how we compare to other solutions you're considering.",
                high: "Hi [Customer], I'm excited to show you exactly why we're the clear leader in this space and the best choice for your needs."
            },
            acknowledgment: {
                low: "It's wise to evaluate all available options.",
                medium: "You're absolutely right to do thorough competitive research - this decision is too important to rush.",
                high: "I really respect your careful evaluation process. The best customers always do their homework, and that's exactly what you're doing."
            },
            valueDiscussion: "Let me show you how [valueProposition] gives us clear competitive advantages for [tierDescription] like yours.",
            urgency: {
                low: "I want to understand what specific comparisons you're making.",
                medium: "I'd like to walk through a detailed competitive comparison and show you our unique strengths.",
                high: "I'm confident that after seeing our competitive advantages, you'll understand why we're the obvious choice."
            },
            nextSteps: {
                low: "Would you like me to send you a competitive comparison, or should we discuss specific concerns?",
                medium: "What would be most helpful - a competitive analysis session this week, or detailed comparison materials?",
                high: "Can I show you our competitive advantages right now? I think you'll be impressed by what sets us apart."
            }
        },
        nudge: {
            title: {
                low: "Competitive Comparison",
                medium: "See Why We Lead",
                high: "The Clear Choice"
            },
            message: {
                low: "Comparing solutions? See how we stack up against the competition.",
                medium: "Discover our competitive advantages and why customers choose us over alternatives.",
                high: "Experience the difference that makes us the industry leader and customer favorite."
            },
            cta: {
                low: "Compare solutions",
                medium: "See our advantages",
                high: "Choose the leader"
            }
        }
    },
    
    'api-documentation': {
        email: {
            subject: {
                low: "Re: API Documentation",
                medium: "Re: API Support - Complete Developer Resources",
                high: "Re: API Priority - Expert Developer Support Available"
            },
            greeting: {
                low: "Hello [Customer],",
                medium: "Hi [Customer],",
                high: "Dear [Customer],"
            },
            empathy: {
                low: "I see you need assistance with our API documentation.",
                medium: "I understand that clear API documentation is crucial for your development work.",
                high: "I completely understand how important comprehensive API documentation is for developers. There's nothing more frustrating than incomplete or unclear technical documentation when you're trying to build something amazing."
            },
            acknowledgment: {
                low: "Good API documentation is essential for successful integration.",
                medium: "You're absolutely right that clear, complete API documentation is fundamental to development success.",
                high: "API documentation can make or break a developer's experience, and I want to make sure you have everything you need to be successful and productive."
            },
            valueConnection: "Our comprehensive API resources are designed to help [tierDescription] like yours maximize [valueProposition] through seamless integrations.",
            urgency: {
                low: "I'm here to help you find the API resources you need.",
                medium: "Let me connect you with our developer relations team this week for comprehensive API support.",
                high: "I'm putting you in direct contact with our senior API specialists for immediate, expert assistance."
            },
            closing: {
                low: "I'm committed to supporting your development needs.\n\nBest regards,",
                medium: "Our developer resources are here to support your success.\n\nWith technical support,",
                high: "I'm personally ensuring you get the API support you need for development success.\n\nWith developer-focused dedication,"
            }
        },
        call: {
            opening: {
                low: "Hi [Customer], I understand you need help with our API documentation.",
                medium: "Hi [Customer], I'd love to connect you with the right API resources and support.",
                high: "Hi [Customer], API support is critical for developers, and I want to make sure you have everything you need to be successful."
            },
            acknowledgment: {
                low: "Clear API documentation is important for development success.",
                medium: "I know that having comprehensive, accurate API documentation is essential for efficient development.",
                high: "As a developer, you need API documentation that's not just complete, but actually useful and well-organized. I take that responsibility seriously."
            },
            valueDiscussion: "Let me show you how our API capabilities enhance [valueProposition] for [tierDescription] building integrations.",
            urgency: {
                low: "I want to understand your specific API questions and development needs.",
                medium: "Let me connect you with our developer advocates who can provide comprehensive API guidance.",
                high: "I'm bringing in our senior API team immediately to give you expert support and documentation."
            },
            nextSteps: {
                low: "Would you prefer updated API documentation, or should we schedule a technical consultation?",
                medium: "What would help most - a developer onboarding session this week, or direct access to our API specialists?",
                high: "Can I get our lead API developer on the line right now to answer your questions directly?"
            }
        },
        nudge: {
            title: {
                low: "API Documentation Available",
                medium: "Developer Resources Ready",
                high: "Expert API Support"
            },
            message: {
                low: "Access comprehensive API documentation and developer resources.",
                medium: "Get the API documentation and developer support you need for successful integration.",
                high: "Connect with our API experts for comprehensive documentation and hands-on development support."
            },
            cta: {
                low: "View API docs",
                medium: "Access developer resources",
                high: "Get expert API help"
            }
        }
    },
    
    'compliance-requirement': {
        email: {
            subject: {
                low: "Re: Compliance Requirements",
                medium: "Re: Compliance Questions - Complete Regulatory Support",
                high: "Re: Compliance Priority - Expert Regulatory Assistance"
            },
            greeting: {
                low: "Hello [Customer],",
                medium: "Hi [Customer],",
                high: "Dear [Customer],"
            },
            empathy: {
                low: "I understand you have questions about compliance requirements.",
                medium: "I know that compliance requirements can be complex and stressful to navigate.",
                high: "I completely understand your compliance concerns. Regulatory requirements can be overwhelming, and the stakes are high when it comes to staying compliant. I want to make sure you feel completely confident and supported."
            },
            acknowledgment: {
                low: "Compliance is an important consideration for any organization.",
                medium: "You're absolutely right to be thorough about compliance - regulatory adherence is critical for business operations.",
                high: "Compliance isn't just important, it's essential for protecting your business and maintaining trust. I deeply respect your diligent approach to regulatory requirements."
            },
            valueConnection: "Our compliance expertise ensures [valueProposition] while maintaining full regulatory adherence for [tierDescription] in regulated industries.",
            urgency: {
                low: "I'm here to help you understand our compliance capabilities and certifications.",
                medium: "Let me connect you with our compliance specialists this week for detailed regulatory guidance.",
                high: "I'm escalating this to our senior compliance team immediately for expert regulatory support and documentation."
            },
            closing: {
                low: "I'm committed to addressing your compliance questions.\n\nBest regards,",
                medium: "Our compliance expertise is here to support your regulatory needs.\n\nWith regulatory focus,",
                high: "I'm personally ensuring you get comprehensive compliance support and peace of mind.\n\nWith regulatory excellence,"
            }
        },
        call: {
            opening: {
                low: "Hi [Customer], I understand you have compliance questions.",
                medium: "Hi [Customer], I'd love to discuss our compliance capabilities and how we support regulatory requirements.",
                high: "Hi [Customer], compliance is critical for your industry, and I want to show you exactly how we ensure regulatory adherence."
            },
            acknowledgment: {
                low: "Compliance requirements are important considerations.",
                medium: "I know that compliance isn't optional - it's a fundamental requirement for your business operations.",
                high: "Compliance is non-negotiable in your industry, and I want to show you how seriously we take regulatory adherence and how we protect our customers."
            },
            valueDiscussion: "Let me explain how our compliance framework protects [valueProposition] while ensuring regulatory adherence for [tierDescription].",
            urgency: {
                low: "I want to understand your specific compliance requirements and concerns.",
                medium: "Let me connect you with our compliance experts for detailed regulatory guidance and documentation.",
                high: "I'm bringing in our senior compliance officer immediately to address your regulatory requirements comprehensively."
            },
            nextSteps: {
                low: "Would you like our compliance documentation, or should we schedule a regulatory consultation?",
                medium: "What would be most helpful - a compliance overview session this week, or detailed regulatory assessment?",
                high: "Can I get our chief compliance officer on the line right now to address your regulatory requirements?"
            }
        },
        nudge: {
            title: {
                low: "Compliance Support Available",
                medium: "Regulatory Compliance Ready",
                high: "Expert Compliance Assurance"
            },
            message: {
                low: "Get the compliance information and support you need for regulatory confidence.",
                medium: "Ensure regulatory compliance with our expert guidance and comprehensive documentation.",
                high: "Achieve complete regulatory confidence with our certified compliance experts and proven frameworks."
            },
            cta: {
                low: "View compliance info",
                medium: "Ensure compliance",
                high: "Get compliance expertise"
            }
        }
    },
    
    'training-request': {
        email: {
            subject: {
                low: "Re: Training Request",
                medium: "Re: Training Needs - Comprehensive Learning Support",
                high: "Re: Training Priority - Expert Educational Resources"
            },
            greeting: {
                low: "Hi [Customer],",
                medium: "Hello [Customer],",
                high: "Dear [Customer],"
            },
            empathy: {
                low: "I received your training request and I'm here to help.",
                medium: "I understand the importance of proper training for your team's success with our platform.",
                high: "I'm so glad you reached out about training! Investing in your team's education shows incredible leadership, and I want to make sure we provide you with the most effective learning experience possible."
            },
            acknowledgment: {
                low: "Proper training is essential for platform success.",
                medium: "You're absolutely right that comprehensive training is the foundation of successful platform adoption.",
                high: "Training is one of the smartest investments you can make. Well-trained teams achieve dramatically better results, and I'm excited to help your team reach their full potential."
            },
            valueConnection: "Our training programs are designed to help [tierDescription] like yours maximize [valueProposition] through expert knowledge and best practices.",
            urgency: {
                low: "I'm here to discuss training options that meet your team's needs.",
                medium: "Let me design a custom training program for your team this week.",
                high: "I'm prioritizing your team's training needs and connecting you with our best instructors immediately."
            },
            closing: {
                low: "I'm committed to supporting your team's learning needs.\n\nBest regards,",
                medium: "Excited to help your team achieve training success.\n\nWith educational focus,",
                high: "I'm personally dedicated to delivering exceptional training that transforms your team's capabilities.\n\nWith commitment to your team's excellence,"
            }
        },
        call: {
            opening: {
                low: "Hi [Customer], I understand you're looking for training options.",
                medium: "Hi [Customer], I'd love to discuss training programs that will set your team up for success.",
                high: "Hi [Customer], I'm excited to talk about training because I know how much it can accelerate your team's success and productivity."
            },
            acknowledgment: {
                low: "Training is an important investment in your team's success.",
                medium: "You're showing great leadership by prioritizing your team's professional development and platform proficiency.",
                high: "Investing in training shows you understand that your team's success is your organization's success. That kind of leadership approach really impresses me."
            },
            valueDiscussion: "Let me show you how our training programs accelerate [valueProposition] for [tierDescription] through expert knowledge transfer.",
            urgency: {
                low: "I want to understand your team's training needs and learning preferences.",
                medium: "I'd like to design a customized training program that fits your team's schedule and learning style.",
                high: "I'm connecting you with our head of training immediately to design the perfect learning experience for your team."
            },
            nextSteps: {
                low: "Would you prefer self-paced training materials, or should we schedule instructor-led sessions?",
                medium: "What would work better - a comprehensive training workshop this week, or a structured learning path over time?",
                high: "Can I get our lead trainer on the line right now to design a custom program for your team?"
            }
        },
        nudge: {
            title: {
                low: "Training Available",
                medium: "Expert Training Programs",
                high: "Transform Your Team"
            },
            message: {
                low: "Access comprehensive training resources to maximize your team's platform proficiency.",
                medium: "Accelerate your team's success with expert-led training programs and resources.",
                high: "Transform your team's capabilities with our comprehensive training programs led by certified experts."
            },
            cta: {
                low: "Explore training",
                medium: "Start learning program",
                high: "Get expert training"
            }
        }
    }
};

// Value focus templates
const valueTemplates = {
    roi: {
        smb: "cost savings and increased efficiency",
        'mid-market': "measurable ROI and operational improvements",
        enterprise: "strategic value and enterprise-scale cost optimization"
    },
    simplicity: {
        smb: "user-friendly solutions that just work",
        'mid-market': "streamlined processes and reduced complexity",
        enterprise: "enterprise-grade simplicity and ease of adoption"
    },
    support: {
        smb: "dedicated support and guidance",
        'mid-market': "comprehensive success partnership",
        enterprise: "white-glove support and strategic consultation"
    },
    integrations: {
        smb: "seamless integrations with your existing tools",
        'mid-market': "robust integration capabilities and workflow optimization",
        enterprise: "enterprise-grade integrations and system architecture"
    }
};

// Customer Outcome Templates for Success Plans
const outcomeTemplates = {
    // Revenue & Growth
    'increase-retention': {
        title: 'Customer Retention Enhancement Plan',
        description: 'Strategic engagement to strengthen customer relationships and reduce churn',
        keyMetrics: ['Churn Rate', 'Customer Lifetime Value', 'Engagement Score'],
        category: 'revenue',
        phases: { discovery: 'Relationship Assessment', engagement: 'Value Reinforcement', optimization: 'Loyalty Building' }
    },
    'drive-upsells': {
        title: 'Revenue Expansion Strategy', 
        description: 'Data-driven approach to identify and capitalize on upsell opportunities',
        keyMetrics: ['Revenue Per Customer', 'Upsell Conversion Rate', 'Feature Utilization'],
        category: 'revenue',
        phases: { discovery: 'Opportunity Analysis', engagement: 'Value Demonstration', optimization: 'Implementation Support' }
    },
    'increase-referrals': {
        title: 'Customer Referral Program',
        description: 'Systematic approach to turning satisfied customers into brand advocates',
        keyMetrics: ['Referral Rate', 'Referral Quality Score', 'Advocate Engagement'],
        category: 'revenue',
        phases: { discovery: 'Advocate Identification', engagement: 'Referral Activation', optimization: 'Program Optimization' }
    },
    'expand-international': {
        title: 'International Market Expansion',
        description: 'Strategic guidance for customers expanding into new international markets',
        keyMetrics: ['Market Penetration', 'International Revenue', 'Localization Success'],
        category: 'revenue',
        phases: { discovery: 'Market Analysis', engagement: 'Expansion Planning', optimization: 'Growth Scaling' }
    },
    
    // Adoption & Engagement
    'enhance-adoption': {
        title: 'User Adoption Acceleration Plan',
        description: 'Comprehensive strategy to increase feature usage and platform engagement',
        keyMetrics: ['Feature Adoption Rate', 'Daily Active Users', 'Time to Value'],
        category: 'adoption',
        phases: { discovery: 'Usage Analysis', engagement: 'Targeted Training', optimization: 'Adoption Optimization' }
    },
    'maximize-engagement': {
        title: 'Customer Engagement Maximization',
        description: 'Multi-channel approach to boost customer participation and platform usage',
        keyMetrics: ['Engagement Score', 'Session Duration', 'Feature Usage Depth'],
        category: 'adoption',
        phases: { discovery: 'Engagement Assessment', engagement: 'Activation Campaigns', optimization: 'Sustained Engagement' }
    },
    'effective-onboarding': {
        title: 'Onboarding Excellence Program',
        description: 'Structured approach to accelerate new customer success and time-to-value',
        keyMetrics: ['Time to First Value', 'Onboarding Completion Rate', 'Early Engagement'],
        category: 'adoption',
        phases: { discovery: 'Welcome & Setup', engagement: 'Core Training', optimization: 'Success Optimization' }
    },
    'reduce-onboarding-time': {
        title: 'Rapid Onboarding Initiative',
        description: 'Streamlined process to minimize time from signup to value realization',
        keyMetrics: ['Onboarding Duration', 'Setup Completion Rate', 'Time to First Success'],
        category: 'adoption',
        phases: { discovery: 'Process Analysis', engagement: 'Streamlined Setup', optimization: 'Continuous Improvement' }
    },
    'shorten-time-to-value': {
        title: 'Accelerated Value Delivery',
        description: 'Fast-track approach to help customers realize immediate benefits',
        keyMetrics: ['Time to First Value', 'Quick Win Rate', 'Early Success Metrics'],
        category: 'adoption',
        phases: { discovery: 'Value Mapping', engagement: 'Quick Win Implementation', optimization: 'Value Expansion' }
    },
    
    // Satisfaction & Experience  
    'enhance-satisfaction': {
        title: 'Customer Satisfaction Enhancement',
        description: 'Proactive approach to improve overall customer experience and satisfaction',
        keyMetrics: ['CSAT Score', 'Support Ticket Volume', 'Response Time'],
        category: 'satisfaction',
        phases: { discovery: 'Experience Assessment', engagement: 'Experience Enhancement', optimization: 'Continuous Monitoring' }
    },
    'increase-nps': {
        title: 'Net Promoter Score Improvement',
        description: 'Strategic initiative to increase customer advocacy and recommendation likelihood',
        keyMetrics: ['NPS Score', 'Promoter Percentage', 'Detractor Reduction'],
        category: 'satisfaction',
        phases: { discovery: 'NPS Analysis', engagement: 'Experience Optimization', optimization: 'Advocacy Development' }
    },
    'optimize-journey': {
        title: 'Customer Journey Optimization',
        description: 'End-to-end journey mapping and improvement for seamless experiences',
        keyMetrics: ['Journey Completion Rate', 'Friction Points', 'Satisfaction by Stage'],
        category: 'satisfaction',
        phases: { discovery: 'Journey Mapping', engagement: 'Friction Removal', optimization: 'Experience Refinement' }
    },
    'improve-self-service': {
        title: 'Self-Service Experience Enhancement',
        description: 'Empowering customers with tools and resources for independent success',
        keyMetrics: ['Self-Service Usage', 'Resolution Rate', 'Customer Effort Score'],
        category: 'satisfaction',
        phases: { discovery: 'Needs Assessment', engagement: 'Resource Development', optimization: 'Usage Optimization' }
    },
    
    // Operational Excellence
    'mitigate-churn': {
        title: 'Churn Prevention Strategy',
        description: 'Proactive intervention to identify and prevent customer churn',
        keyMetrics: ['Churn Risk Score', 'Health Score Improvement', 'Retention Rate'],
        category: 'operational',
        phases: { discovery: 'Risk Identification', engagement: 'Proactive Intervention', optimization: 'Relationship Stabilization' }
    },
    'reduce-resolution-time': {
        title: 'Support Efficiency Enhancement',
        description: 'Systematic approach to faster issue resolution and improved support experience',
        keyMetrics: ['Average Resolution Time', 'First Contact Resolution', 'Customer Effort Score'],
        category: 'operational',
        phases: { discovery: 'Process Analysis', engagement: 'Efficiency Implementation', optimization: 'Continuous Improvement' }
    },
    'minimize-support-backlog': {
        title: 'Support Backlog Reduction',
        description: 'Strategic initiative to reduce support ticket volume and improve efficiency',
        keyMetrics: ['Ticket Volume', 'Backlog Size', 'Resolution Rate'],
        category: 'operational',
        phases: { discovery: 'Backlog Analysis', engagement: 'Prevention Strategies', optimization: 'Sustainable Solutions' }
    },
    'improve-health-metrics': {
        title: 'Customer Health Score Optimization',
        description: 'Comprehensive approach to improve customer health indicators and predictive metrics',
        keyMetrics: ['Health Score', 'Risk Indicators', 'Engagement Trends'],
        category: 'operational',
        phases: { discovery: 'Health Assessment', engagement: 'Improvement Actions', optimization: 'Ongoing Monitoring' }
    },
    
    // Education & Advocacy
    'expand-education': {
        title: 'Customer Education Program',
        description: 'Comprehensive educational initiative to maximize customer platform proficiency',
        keyMetrics: ['Training Completion Rate', 'Certification Achievement', 'Knowledge Application'],
        category: 'education',
        phases: { discovery: 'Learning Needs Assessment', engagement: 'Educational Content Delivery', optimization: 'Knowledge Reinforcement' }
    },
    'foster-advocacy': {
        title: 'Customer Advocacy Development',
        description: 'Strategic program to cultivate passionate customer advocates and brand champions',
        keyMetrics: ['Advocacy Score', 'Testimonial Participation', 'Reference Willingness'],
        category: 'education',
        phases: { discovery: 'Advocate Identification', engagement: 'Advocacy Activation', optimization: 'Community Building' }
    },
    'strengthen-community': {
        title: 'Customer Community Enhancement',
        description: 'Building and nurturing a vibrant customer community for peer learning and support',
        keyMetrics: ['Community Engagement', 'Peer Interactions', 'Knowledge Sharing'],
        category: 'education',
        phases: { discovery: 'Community Assessment', engagement: 'Engagement Strategies', optimization: 'Self-Sustaining Growth' }
    },
    'create-feedback-loop': {
        title: 'Customer Feedback System',
        description: 'Systematic approach to collecting, analyzing, and acting on customer feedback',
        keyMetrics: ['Feedback Volume', 'Response Rate', 'Implementation Rate'],
        category: 'education',
        phases: { discovery: 'Feedback Mechanism Design', engagement: 'Collection & Analysis', optimization: 'Continuous Improvement' }
    },
    
    // Digital & Technical
    'enhance-mobile-engagement': {
        title: 'Mobile Experience Optimization',
        description: 'Strategic enhancement of mobile app engagement and user experience',
        keyMetrics: ['Mobile Usage Rate', 'App Session Duration', 'Mobile Feature Adoption'],
        category: 'technical',
        phases: { discovery: 'Mobile Usage Analysis', engagement: 'Experience Enhancement', optimization: 'Engagement Optimization' }
    },
    'optimize-mobile-ux': {
        title: 'Mobile User Experience Enhancement',
        description: 'Comprehensive mobile UX improvement for better customer satisfaction',
        keyMetrics: ['Mobile CSAT', 'App Store Rating', 'Task Completion Rate'],
        category: 'technical',
        phases: { discovery: 'UX Assessment', engagement: 'Interface Optimization', optimization: 'Performance Monitoring' }
    },
    'enhance-data-analytics': {
        title: 'Data Analytics Adoption Program',
        description: 'Enabling customers to leverage data analytics for better business decisions',
        keyMetrics: ['Analytics Usage', 'Report Generation', 'Data-Driven Decisions'],
        category: 'technical',
        phases: { discovery: 'Analytics Needs Assessment', engagement: 'Training & Implementation', optimization: 'Advanced Analytics' }
    },
    'optimize-cloud-infrastructure': {
        title: 'Cloud Infrastructure Optimization',
        description: 'Strategic guidance for optimal cloud resource usage and cost efficiency',
        keyMetrics: ['Resource Utilization', 'Cost Efficiency', 'Performance Metrics'],
        category: 'technical',
        phases: { discovery: 'Infrastructure Assessment', engagement: 'Optimization Implementation', optimization: 'Ongoing Monitoring' }
    }
};

// Success Plan Sequence Templates - Enhanced for all outcomes and communication styles
const sequenceTemplates = {
    // Revenue & Growth Outcomes
    'increase-retention': {
        light: {
            30: [
                { day: 3, type: 'email', phase: 'discovery', subject: 'Partnership Health Check', focus: 'relationship-building' },
                { day: 10, type: 'nudge', phase: 'engagement', subject: 'Value Reminder', focus: 'value-reminder' },  
                { day: 20, type: 'call', phase: 'optimization', subject: 'Partnership Review', focus: 'loyalty-check' },
                { day: 28, type: 'email', phase: 'optimization', subject: 'Future Planning', focus: 'future-planning' }
            ],
            60: [
                { day: 3, type: 'email', phase: 'discovery', subject: 'Partnership Assessment', focus: 'relationship-building' },
                { day: 10, type: 'nudge', phase: 'discovery', subject: 'Engagement Boost', focus: 'engagement-boost' },
                { day: 20, type: 'call', phase: 'engagement', subject: 'Value Discussion', focus: 'value-discussion' },
                { day: 30, type: 'email', phase: 'engagement', subject: 'Success Stories', focus: 'success-stories' },
                { day: 45, type: 'nudge', phase: 'optimization', subject: 'Loyalty Program Invitation', focus: 'loyalty-program' },
                { day: 55, type: 'call', phase: 'optimization', subject: 'Long-term Planning', focus: 'long-term-planning' }
            ],
            90: [
                { day: 5, type: 'email', phase: 'discovery', subject: 'Partnership Health Check', focus: 'relationship-building' },
                { day: 15, type: 'nudge', phase: 'discovery', subject: 'Engagement Enhancement', focus: 'engagement-boost' },
                { day: 25, type: 'call', phase: 'engagement', subject: 'Value Alignment Call', focus: 'value-discussion' },
                { day: 40, type: 'email', phase: 'engagement', subject: 'Customer Success Stories', focus: 'success-stories' },
                { day: 55, type: 'nudge', phase: 'engagement', subject: 'Community Invitation', focus: 'community-invitation' },
                { day: 70, type: 'call', phase: 'optimization', subject: 'Loyalty Program Discussion', focus: 'loyalty-program' },
                { day: 85, type: 'email', phase: 'optimization', subject: 'Strategic Planning Session', focus: 'future-planning' }
            ],
            120: [
                { day: 7, type: 'email', phase: 'discovery', subject: 'Partnership Health Assessment', focus: 'relationship-building' },
                { day: 20, type: 'nudge', phase: 'discovery', subject: 'Engagement Boost', focus: 'engagement-boost' },
                { day: 35, type: 'call', phase: 'engagement', subject: 'Value Discussion', focus: 'value-discussion' },
                { day: 50, type: 'email', phase: 'engagement', subject: 'Success Stories & Best Practices', focus: 'success-stories' },
                { day: 70, type: 'nudge', phase: 'engagement', subject: 'Community & Resources', focus: 'community-invitation' },
                { day: 90, type: 'call', phase: 'optimization', subject: 'Loyalty & Advocacy Program', focus: 'loyalty-program' },
                { day: 105, type: 'email', phase: 'optimization', subject: 'Future Partnership Planning', focus: 'future-planning' },
                { day: 115, type: 'nudge', phase: 'optimization', subject: 'Advocacy Opportunities', focus: 'advocacy-invitation' }
            ]
        },
        standard: {
            30: [
                { day: 2, type: 'email', phase: 'discovery', subject: 'Partnership Health Assessment', focus: 'relationship-building' },
                { day: 7, type: 'call', phase: 'discovery', subject: 'Needs Assessment Call', focus: 'needs-assessment' },
                { day: 12, type: 'nudge', phase: 'engagement', subject: 'Value Reminder', focus: 'value-reminder' },
                { day: 18, type: 'email', phase: 'engagement', subject: 'Success Stories', focus: 'success-stories' },
                { day: 25, type: 'call', phase: 'optimization', subject: 'Partnership Review', focus: 'loyalty-check' }
            ],
            60: [
                { day: 2, type: 'email', phase: 'discovery', subject: 'Partnership Health Check', focus: 'relationship-building' },
                { day: 8, type: 'call', phase: 'discovery', subject: 'Strategic Assessment', focus: 'needs-assessment' },
                { day: 16, type: 'nudge', phase: 'engagement', subject: 'Value Reinforcement', focus: 'value-reminder' },
                { day: 25, type: 'email', phase: 'engagement', subject: 'Customer Success Stories', focus: 'success-stories' },
                { day: 35, type: 'call', phase: 'engagement', subject: 'Value Alignment Discussion', focus: 'value-discussion' },
                { day: 45, type: 'nudge', phase: 'optimization', subject: 'Loyalty Program', focus: 'loyalty-program' },
                { day: 55, type: 'email', phase: 'optimization', subject: 'Future Planning & Strategy', focus: 'future-planning' }
            ]
        },
        intensive: {
            30: [
                { day: 1, type: 'email', phase: 'discovery', subject: 'Immediate Partnership Assessment', focus: 'relationship-building' },
                { day: 3, type: 'call', phase: 'discovery', subject: 'Urgent Needs Assessment', focus: 'needs-assessment' },
                { day: 6, type: 'nudge', phase: 'discovery', subject: 'Engagement Acceleration', focus: 'engagement-boost' },
                { day: 10, type: 'email', phase: 'engagement', subject: 'Critical Value Reminder', focus: 'value-reminder' },
                { day: 14, type: 'call', phase: 'engagement', subject: 'Success Strategy Session', focus: 'success-stories' },
                { day: 18, type: 'nudge', phase: 'engagement', subject: 'Community & Support Access', focus: 'community-invitation' },
                { day: 22, type: 'email', phase: 'optimization', subject: 'Loyalty Program Enrollment', focus: 'loyalty-program' },
                { day: 26, type: 'call', phase: 'optimization', subject: 'Strategic Future Planning', focus: 'future-planning' }
            ]
        }
    },
    
    'drive-upsells': {
        milestone: {
            60: [
                { day: 10, type: 'email', phase: 'discovery', subject: 'Growth Opportunity Analysis', focus: 'opportunity-analysis' },
                { day: 25, type: 'call', phase: 'engagement', subject: 'Value Demonstration Session', focus: 'value-demonstration' },
                { day: 40, type: 'nudge', phase: 'engagement', subject: 'ROI Calculator & Benefits', focus: 'roi-calculation' },
                { day: 55, type: 'email', phase: 'optimization', subject: 'Implementation Support', focus: 'implementation-support' }
            ],
            90: [
                { day: 5, type: 'email', phase: 'discovery', subject: 'Expansion Opportunity Assessment', focus: 'opportunity-analysis' },
                { day: 15, type: 'call', phase: 'discovery', subject: 'Growth Needs Analysis', focus: 'needs-expansion' },
                { day: 30, type: 'nudge', phase: 'engagement', subject: 'Premium Feature Demo', focus: 'value-demonstration' },
                { day: 45, type: 'email', phase: 'engagement', subject: 'ROI Analysis & Proposal', focus: 'roi-calculation' },
                { day: 60, type: 'call', phase: 'engagement', subject: 'Proposal Discussion', focus: 'proposal-discussion' },
                { day: 75, type: 'email', phase: 'optimization', subject: 'Implementation Roadmap', focus: 'implementation-support' },
                { day: 90, type: 'call', phase: 'optimization', subject: 'Success Measurement & Review', focus: 'success-measurement' }
            ],
            120: [
                { day: 7, type: 'email', phase: 'discovery', subject: 'Growth Strategy Assessment', focus: 'opportunity-analysis' },
                { day: 20, type: 'call', phase: 'discovery', subject: 'Expansion Planning Call', focus: 'needs-expansion' },
                { day: 35, type: 'nudge', phase: 'discovery', subject: 'Advanced Features Preview', focus: 'feature-preview' },
                { day: 50, type: 'email', phase: 'engagement', subject: 'Custom Value Demonstration', focus: 'value-demonstration' },
                { day: 65, type: 'call', phase: 'engagement', subject: 'ROI & Business Case Review', focus: 'roi-calculation' },
                { day: 80, type: 'nudge', phase: 'engagement', subject: 'Limited-Time Expansion Offer', focus: 'special-offer' },
                { day: 95, type: 'email', phase: 'optimization', subject: 'Implementation Planning', focus: 'implementation-support' },
                { day: 110, type: 'call', phase: 'optimization', subject: 'Launch Support & Measurement', focus: 'success-measurement' }
            ]
        }
    },
    
    // Adoption & Engagement Outcomes
    'enhance-adoption': {
        intensive: {
            30: [
                { day: 1, type: 'email', phase: 'discovery', subject: 'Usage Analytics Review', focus: 'usage-analysis' },
                { day: 3, type: 'call', phase: 'discovery', subject: 'Adoption Barrier Analysis', focus: 'barrier-identification' },
                { day: 7, type: 'nudge', phase: 'engagement', subject: 'Feature Training Invitation', focus: 'training-invitation' },
                { day: 10, type: 'email', phase: 'engagement', subject: 'Quick Wins Implementation', focus: 'quick-wins' },
                { day: 14, type: 'call', phase: 'engagement', subject: 'Progress Check & Guidance', focus: 'progress-check' },
                { day: 18, type: 'nudge', phase: 'optimization', subject: 'Advanced Features Unlock', focus: 'advanced-features' },
                { day: 22, type: 'email', phase: 'optimization', subject: 'Best Practices Guide', focus: 'best-practices' },
                { day: 28, type: 'call', phase: 'optimization', subject: 'Adoption Success Review', focus: 'adoption-measurement' }
            ],
            60: [
                { day: 2, type: 'email', phase: 'discovery', subject: 'Comprehensive Usage Analysis', focus: 'usage-analysis' },
                { day: 5, type: 'call', phase: 'discovery', subject: 'Adoption Strategy Planning', focus: 'barrier-identification' },
                { day: 10, type: 'nudge', phase: 'discovery', subject: 'Feature Exploration Guide', focus: 'feature-exploration' },
                { day: 15, type: 'email', phase: 'engagement', subject: 'Personalized Training Plan', focus: 'training-invitation' },
                { day: 22, type: 'call', phase: 'engagement', subject: 'Quick Wins Workshop', focus: 'quick-wins' },
                { day: 30, type: 'nudge', phase: 'engagement', subject: 'Progress Milestone Check', focus: 'progress-check' },
                { day: 38, type: 'email', phase: 'engagement', subject: 'Advanced Feature Mastery', focus: 'advanced-features' },
                { day: 45, type: 'call', phase: 'optimization', subject: 'Best Practices Implementation', focus: 'best-practices' },
                { day: 52, type: 'nudge', phase: 'optimization', subject: 'Community Success Sharing', focus: 'community-sharing' },
                { day: 58, type: 'email', phase: 'optimization', subject: 'Adoption Excellence Report', focus: 'adoption-measurement' }
            ]
        }
    },
    
    // Satisfaction & Experience Outcomes
    'enhance-satisfaction': {
        standard: {
            30: [
                { day: 3, type: 'email', phase: 'discovery', subject: 'Experience Assessment Survey', focus: 'experience-assessment' },
                { day: 10, type: 'call', phase: 'discovery', subject: 'Feedback Collection Call', focus: 'feedback-collection' },
                { day: 17, type: 'nudge', phase: 'engagement', subject: 'Improvement Updates', focus: 'improvement-notification' },
                { day: 24, type: 'email', phase: 'optimization', subject: 'Satisfaction Follow-up', focus: 'satisfaction-survey' }
            ],
            60: [
                { day: 5, type: 'email', phase: 'discovery', subject: 'Comprehensive Experience Review', focus: 'experience-assessment' },
                { day: 12, type: 'call', phase: 'discovery', subject: 'Detailed Feedback Session', focus: 'feedback-collection' },
                { day: 20, type: 'nudge', phase: 'engagement', subject: 'Experience Improvements Notification', focus: 'improvement-notification' },
                { day: 30, type: 'email', phase: 'engagement', subject: 'Progress & Improvements Update', focus: 'progress-update' },
                { day: 42, type: 'call', phase: 'optimization', subject: 'Satisfaction Check-in', focus: 'satisfaction-check' },
                { day: 55, type: 'email', phase: 'optimization', subject: 'Continuous Improvement Plan', focus: 'continuous-improvement' }
            ]
        }
    },
    
    // Operational Excellence Outcomes
    'mitigate-churn': {
        intensive: {
            30: [
                { day: 1, type: 'call', phase: 'discovery', subject: 'Urgent Intervention Call', focus: 'urgent-intervention' },
                { day: 3, type: 'email', phase: 'discovery', subject: 'Value Reinforcement Message', focus: 'value-reminder' },
                { day: 7, type: 'nudge', phase: 'engagement', subject: 'Quick Wins Implementation', focus: 'quick-wins' },
                { day: 12, type: 'call', phase: 'engagement', subject: 'Barrier Removal Session', focus: 'barrier-removal' },
                { day: 18, type: 'email', phase: 'engagement', subject: 'Success Stories & Benefits', focus: 'success-stories' },
                { day: 25, type: 'call', phase: 'optimization', subject: 'Relationship Stabilization', focus: 'relationship-stabilization' }
            ]
        }
    }
};

// Communication Focus Templates - Enhanced for all focus types
const focusTemplates = {
    // Relationship & Engagement
    'relationship-building': {
        purpose: 'Strengthen partnership and understanding',
        tone: 'warm, personal, consultative',
        cta: 'Schedule relationship check-in',
        email: 'Building stronger partnerships together',
        call: 'Let\'s strengthen our partnership and ensure alignment',
        nudge: 'Building success together'
    },
    'engagement-boost': {
        purpose: 'Increase customer engagement and participation',
        tone: 'encouraging, energetic, supportive',
        cta: 'Explore engagement opportunities',
        email: 'Boosting your engagement and success',
        call: 'Let\'s explore ways to enhance your experience',
        nudge: 'Unlock your potential'
    },
    'community-invitation': {
        purpose: 'Connect customers with peer community',
        tone: 'inclusive, welcoming, collaborative',
        cta: 'Join our community',
        email: 'Join our thriving customer community',
        call: 'Let me introduce you to our amazing community',
        nudge: 'Connect with peers'
    },
    
    // Value & ROI
    'value-reminder': {
        purpose: 'Reinforce product value and benefits',
        tone: 'informative, reassuring, benefits-focused',
        cta: 'Review value summary',
        email: 'Maximizing your investment value',
        call: 'Let\'s review the value you\'re receiving',
        nudge: 'Your success matters'
    },
    'value-discussion': {
        purpose: 'Deep dive into customer-specific value',
        tone: 'analytical, strategic, consultative',
        cta: 'Schedule value discussion',
        email: 'Strategic value alignment discussion',
        call: 'Let\'s discuss your specific value drivers',
        nudge: 'Explore your ROI'
    },
    'roi-calculation': {
        purpose: 'Demonstrate clear return on investment',
        tone: 'data-driven, analytical, compelling',
        cta: 'Review ROI analysis',
        email: 'Your ROI calculation and business case',
        call: 'Let\'s review your impressive ROI numbers',
        nudge: 'See your ROI'
    },
    
    // Success & Achievement
    'success-stories': {
        purpose: 'Share relevant customer success examples',
        tone: 'inspiring, motivational, achievement-focused',
        cta: 'Explore success stories',
        email: 'Success stories from customers like you',
        call: 'Let me share some inspiring success stories',
        nudge: 'Success inspiration'
    },
    'quick-wins': {
        purpose: 'Enable immediate, achievable victories',
        tone: 'actionable, encouraging, results-focused',
        cta: 'Implement quick wins',
        email: 'Quick wins for immediate impact',
        call: 'Let\'s identify some quick wins together',
        nudge: 'Get quick results'
    },
    'best-practices': {
        purpose: 'Share proven methodologies and tips',
        tone: 'educational, authoritative, helpful',
        cta: 'Implement best practices',
        email: 'Best practices for maximum success',
        call: 'Let me share proven best practices',
        nudge: 'Pro tips inside'
    },
    
    // Assessment & Analysis
    'needs-assessment': {
        purpose: 'Understand current and future needs',
        tone: 'inquisitive, thorough, consultative',
        cta: 'Complete needs assessment',
        email: 'Understanding your evolving needs',
        call: 'Let\'s assess your current and future needs',
        nudge: 'Share your needs'
    },
    'usage-analysis': {
        purpose: 'Review current platform utilization',
        tone: 'analytical, objective, insightful',
        cta: 'Review usage insights',
        email: 'Your usage analytics and insights', 
        call: 'Let\'s review your usage patterns together',
        nudge: 'Check your usage'
    },
    'barrier-identification': {
        purpose: 'Identify and address adoption obstacles',
        tone: 'problem-solving, supportive, solution-focused',
        cta: 'Address barriers together',
        email: 'Removing barriers to your success',
        call: 'Let\'s identify and remove any barriers',
        nudge: 'Clear the path'
    },
    
    // Growth & Expansion
    'opportunity-analysis': {
        purpose: 'Explore growth and expansion opportunities',
        tone: 'strategic, forward-thinking, opportunity-focused',
        cta: 'Explore opportunities',
        email: 'Growth opportunities for your business',
        call: 'Let\'s explore exciting growth opportunities',
        nudge: 'Growth awaits'
    },
    'needs-expansion': {
        purpose: 'Understand evolving and expanding needs',
        tone: 'consultative, growth-oriented, strategic',
        cta: 'Discuss expansion needs', 
        email: 'Supporting your expanding needs',
        call: 'Let\'s discuss your expanding requirements',
        nudge: 'Scale with us'
    },
    'value-demonstration': {
        purpose: 'Show concrete value through demos/examples',
        tone: 'demonstrative, compelling, evidence-based',
        cta: 'See the demonstration',
        email: 'Live demonstration of advanced capabilities',
        call: 'Let me demonstrate the value for you',
        nudge: 'See it in action'
    },
    
    // Implementation & Support
    'implementation-support': {
        purpose: 'Provide guidance during implementation',
        tone: 'supportive, detailed, implementation-focused',
        cta: 'Get implementation support',
        email: 'Implementation support and guidance',
        call: 'Let\'s ensure smooth implementation',
        nudge: 'Implementation help'
    },
    'training-invitation': {
        purpose: 'Invite to educational and training opportunities',
        tone: 'educational, inviting, skill-building',
        cta: 'Join training session',
        email: 'Exclusive training opportunities for you',
        call: 'Let me invite you to our expert training',
        nudge: 'Learn with experts'
    },
    'feature-exploration': {
        purpose: 'Encourage discovery of new features',
        tone: 'exploratory, exciting, discovery-focused',
        cta: 'Explore new features',
        email: 'Exciting features to explore',
        call: 'Let\'s explore some powerful features together',
        nudge: 'Discover more'
    },
    
    // Feedback & Experience  
    'experience-assessment': {
        purpose: 'Evaluate overall customer experience',
        tone: 'evaluative, caring, improvement-focused',
        cta: 'Share your experience',
        email: 'How has your experience been?',
        call: 'Let\'s discuss your experience with us',
        nudge: 'Rate your experience'
    },
    'feedback-collection': {
        purpose: 'Gather specific customer feedback',
        tone: 'receptive, appreciative, feedback-focused',
        cta: 'Share your feedback',
        email: 'Your feedback shapes our success',
        call: 'I\'d love to hear your honest feedback',
        nudge: 'Quick feedback'
    },
    'satisfaction-check': {
        purpose: 'Check on customer satisfaction levels',
        tone: 'caring, attentive, satisfaction-focused',
        cta: 'Share satisfaction feedback',
        email: 'Checking in on your satisfaction',
        call: 'How satisfied are you with our service?',
        nudge: 'Quick satisfaction check'
    },
    
    // Loyalty & Retention
    'loyalty-check': {
        purpose: 'Assess loyalty and retention factors',
        tone: 'relationship-focused, caring, retention-oriented',
        cta: 'Share your thoughts',
        email: 'Strengthening our partnership',
        call: 'Let\'s discuss your long-term satisfaction',
        nudge: 'Partnership check'
    },
    'loyalty-program': {
        purpose: 'Introduce loyalty benefits and programs',
        tone: 'appreciative, exclusive, benefit-focused',
        cta: 'Join loyalty program',
        email: 'Exclusive loyalty program benefits',
        call: 'Let me share our exclusive loyalty benefits',
        nudge: 'VIP benefits await'
    },
    'future-planning': {
        purpose: 'Plan for future success and growth',
        tone: 'strategic, forward-thinking, planning-focused',
        cta: 'Plan for the future',
        email: 'Planning your future success together',
        call: 'Let\'s plan your future growth strategy',
        nudge: 'Plan ahead'
    },
    
    // Advanced & Specialized
    'advanced-features': {
        purpose: 'Introduce advanced platform capabilities',
        tone: 'sophisticated, educational, advanced',
        cta: 'Explore advanced features',
        email: 'Advanced features for power users',
        call: 'Let me show you advanced capabilities',
        nudge: 'Go advanced'
    },
    'progress-check': {
        purpose: 'Review progress against goals',
        tone: 'progress-focused, encouraging, measurement-oriented',
        cta: 'Review progress',
        email: 'Celebrating your progress milestones',
        call: 'Let\'s review your impressive progress',
        nudge: 'Check progress'
    },
    'advocacy-invitation': {
        purpose: 'Invite customers to become advocates',
        tone: 'appreciative, exclusive, advocacy-focused',
        cta: 'Become an advocate',
        email: 'Join our customer advocacy program',
        call: 'I\'d love to invite you to be an advocate',
        nudge: 'Share your story'
    },
    
    // Crisis & Intervention
    'urgent-intervention': {
        purpose: 'Address urgent issues or concerns',
        tone: 'urgent, caring, solution-focused',
        cta: 'Address immediately',
        email: 'Immediate attention to your concerns',
        call: 'I\'m calling to address your concerns right away',
        nudge: 'Need help now?'
    },
    'barrier-removal': {
        purpose: 'Remove specific obstacles to success',
        tone: 'problem-solving, determined, solution-oriented',
        cta: 'Remove barriers',
        email: 'Removing barriers to your success',
        call: 'Let\'s eliminate any barriers together',
        nudge: 'Clear obstacles'
    },
    'relationship-stabilization': {
        purpose: 'Stabilize and strengthen the relationship',
        tone: 'reassuring, stabilizing, relationship-focused',
        cta: 'Strengthen relationship',
        email: 'Strengthening our partnership foundation',
        call: 'Let\'s strengthen our partnership together',
        nudge: 'Rebuild together'
    },
    
    // Measurement & Improvement
    'adoption-measurement': {
        purpose: 'Measure and celebrate adoption success',
        tone: 'celebratory, measurement-focused, achievement-oriented',
        cta: 'Review adoption success',
        email: 'Measuring your adoption success',
        call: 'Let\'s celebrate your adoption achievements',
        nudge: 'Success measured'
    },
    'success-measurement': {
        purpose: 'Measure overall success and ROI',
        tone: 'analytical, celebratory, results-focused',
        cta: 'Measure success together',
        email: 'Measuring your incredible success',
        call: 'Let\'s review your success metrics together',
        nudge: 'Measure success'
    },
    'continuous-improvement': {
        purpose: 'Focus on ongoing improvement opportunities',
        tone: 'improvement-focused, forward-thinking, optimizing',
        cta: 'Continue improving',
        email: 'Continuous improvement opportunities',
        call: 'Let\'s explore improvement opportunities',
        nudge: 'Keep improving'
    },
    
    // Special Cases
    'feature-preview': {
        purpose: 'Preview upcoming or exclusive features',
        tone: 'exclusive, exciting, preview-focused',
        cta: 'Preview features',
        email: 'Exclusive preview of upcoming features',
        call: 'Let me give you an exclusive feature preview',
        nudge: 'Sneak peek'
    },
    'special-offer': {
        purpose: 'Present special offers or opportunities',
        tone: 'exclusive, time-sensitive, opportunity-focused',
        cta: 'Claim special offer',
        email: 'Exclusive special offer for you',
        call: 'I have a special offer just for you',
        nudge: 'Limited offer'
    },
    'community-sharing': {
        purpose: 'Encourage sharing experiences with community',
        tone: 'sharing-focused, community-oriented, collaborative',
        cta: 'Share with community',
        email: 'Share your success with the community',
        call: 'Would you share your experience with others?',
        nudge: 'Share success'
    },
    'improvement-notification': {
        purpose: 'Notify about improvements made based on feedback',
        tone: 'responsive, improvement-focused, appreciative',
        cta: 'See improvements',
        email: 'Improvements based on your feedback',
        call: 'Let me show you improvements we\'ve made',
        nudge: 'New improvements'
    },
    'progress-update': {
        purpose: 'Provide updates on progress and achievements',
        tone: 'informative, progress-focused, encouraging',
        cta: 'Review progress update',
        email: 'Progress update on your success journey',
        call: 'Let me update you on your progress',
        nudge: 'Progress update'
    },
    'proposal-discussion': {
        purpose: 'Discuss specific proposals or recommendations',
        tone: 'professional, consultative, proposal-focused',
        cta: 'Discuss proposal',
        email: 'Let\'s discuss your customized proposal',
        call: 'I\'d like to discuss this proposal with you',
        nudge: 'Review proposal'
    },
    'long-term-planning': {
        purpose: 'Plan for long-term success and growth',
        tone: 'strategic, long-term, planning-focused',
        cta: 'Plan long-term success',
        email: 'Long-term strategic planning session',
        call: 'Let\'s plan your long-term success strategy',
        nudge: 'Think long-term'
    }
};

// DOM Elements
const elements = {
    // Form elements
    scenario: document.getElementById('scenario'),
    empathy: document.getElementById('empathy'),
    empathyValue: document.getElementById('empathyValue'),
    empathyEmoji: document.getElementById('empathyEmoji'),
    urgency: document.getElementById('urgency'),
    urgencyValue: document.getElementById('urgencyValue'),
    urgencyEmoji: document.getElementById('urgencyEmoji'),
    csTier: document.getElementById('csTier'),
    valueCheckboxes: document.querySelectorAll('.value-checkbox'),
    generateBtn: document.getElementById('generateBtn'),
    
    // Success Plan elements
    customerOutcome: document.getElementById('customerOutcome'),
    planDuration: document.getElementById('planDuration'),
    communicationFrequency: document.getElementById('communicationFrequency'),
    successPlanOptions: document.querySelectorAll('.success-plan-options'),
    btnText: document.querySelector('.btn-text'),
    btnSuccessText: document.querySelector('.btn-success-text'),
    
    // Tab elements
    tabBtns: document.querySelectorAll('.tab-btn'),
    outputModes: document.querySelectorAll('.output-mode'),
    responseTabBtns: document.querySelectorAll('.response-tab-btn'),
    responseSections: document.querySelectorAll('.response-section'),
    
    // Output elements
    emailText: document.getElementById('emailText'),
    callText: document.getElementById('callText'),
    nudgeText: document.getElementById('nudgeText'),
    planSummaryContent: document.getElementById('planSummaryContent'),
    sequenceContent: document.getElementById('sequenceContent'),
    
    // Action buttons
    copyEmail: document.getElementById('copyEmail'),
    copyCall: document.getElementById('copyCall'),
    copyNudge: document.getElementById('copyNudge'),
    downloadEmail: document.getElementById('downloadEmail'),
    downloadCall: document.getElementById('downloadCall'),
    downloadNudge: document.getElementById('downloadNudge'),
    copyPlan: document.getElementById('copyPlan'),
    downloadPlan: document.getElementById('downloadPlan'),
    previewTimeline: document.getElementById('previewTimeline'),
    
    // Theme and utility buttons
    themeToggle: document.getElementById('themeToggle'),
    themeIcon: document.querySelector('.theme-icon'),
    resetBtn: document.getElementById('resetBtn'),
    exportAllBtn: document.getElementById('exportAllBtn')
};

// Initialize App
function init() {
    setupEventListeners();
    updateSliderValues();
    loadTheme();
}

// Event Listeners
function setupEventListeners() {
    // Form controls
    elements.scenario.addEventListener('change', updateState);
    elements.empathy.addEventListener('input', updateSliderValues);
    elements.urgency.addEventListener('input', updateSliderValues);
    elements.csTier.addEventListener('change', updateState);
    elements.valueCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateState);
    });
    elements.generateBtn.addEventListener('click', generateResponse);
    
    // Success Plan controls
    if (elements.customerOutcome) elements.customerOutcome.addEventListener('change', updateState);
    if (elements.planDuration) elements.planDuration.addEventListener('change', updateState);
    if (elements.communicationFrequency) elements.communicationFrequency.addEventListener('change', updateState);
    
    // Main tab switching (Single vs Success Plan)
    elements.tabBtns.forEach(btn => {
        btn.addEventListener('click', switchMainTab);
    });
    
    // Response tab switching (Email/Call/Nudge within Single mode)
    elements.responseTabBtns.forEach(btn => {
        btn.addEventListener('click', switchResponseTab);
    });
    
    // Copy buttons
    elements.copyEmail.addEventListener('click', () => copyToClipboard('email'));
    elements.copyCall.addEventListener('click', () => copyToClipboard('call'));
    elements.copyNudge.addEventListener('click', () => copyToClipboard('nudge'));
    if (elements.copyPlan) elements.copyPlan.addEventListener('click', copySuccessPlan);
    
    // Download buttons
    elements.downloadEmail.addEventListener('click', () => downloadText('email'));
    elements.downloadCall.addEventListener('click', () => downloadText('call'));
    elements.downloadNudge.addEventListener('click', () => downloadText('nudge'));
    if (elements.downloadPlan) elements.downloadPlan.addEventListener('click', downloadSuccessPlan);
    if (elements.previewTimeline) elements.previewTimeline.addEventListener('click', previewTimeline);
    
    // Utility buttons
    elements.themeToggle.addEventListener('click', toggleTheme);
    elements.resetBtn.addEventListener('click', resetAll);
    elements.exportAllBtn.addEventListener('click', exportAll);
}

// Update slider values display with emoji indicators
function updateSliderValues() {
    const empathyVal = parseInt(elements.empathy.value);
    const urgencyVal = parseInt(elements.urgency.value);
    
    elements.empathyValue.textContent = empathyVal;
    elements.urgencyValue.textContent = urgencyVal;
    
    // Update empathy emoji
    updateEmpathyEmoji(empathyVal);
    
    // Update urgency emoji
    updateUrgencyEmoji(urgencyVal);
    
    updateState();
}

// Update empathy emoji based on slider value
function updateEmpathyEmoji(value) {
    const empathyEmojis = {
        1: '🤖', 2: '😐', 3: '🙂', 4: '😊', 5: '😇',
        6: '🤗', 7: '💙', 8: '🥰', 9: '💝', 10: '🤍'
    };
    
    const newEmoji = empathyEmojis[value] || '😐';
    if (elements.empathyEmoji.textContent !== newEmoji) {
        elements.empathyEmoji.textContent = newEmoji;
        elements.empathyEmoji.classList.add('animate');
        setTimeout(() => elements.empathyEmoji.classList.remove('animate'), 500);
    }
}

// Update urgency emoji based on slider value
function updateUrgencyEmoji(value) {
    const urgencyEmojis = {
        1: '🕊️', 2: '😌', 3: '📝', 4: '📋', 5: '⏰',
        6: '⚡', 7: '🔥', 8: '🚨', 9: '⚠️', 10: '🆘'
    };
    
    const newEmoji = urgencyEmojis[value] || '⏰';
    if (elements.urgencyEmoji.textContent !== newEmoji) {
        elements.urgencyEmoji.textContent = newEmoji;
        elements.urgencyEmoji.classList.add('animate');
        setTimeout(() => elements.urgencyEmoji.classList.remove('animate'), 500);
    }
}

// Update app state
function updateState() {
    appState.scenario = elements.scenario.value;
    appState.empathy = parseInt(elements.empathy.value);
    appState.urgency = parseInt(elements.urgency.value);
    appState.csTier = elements.csTier.value;
    appState.values = Array.from(elements.valueCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    
    // Success Plan specific state
    if (elements.customerOutcome) appState.customerOutcome = elements.customerOutcome.value;
    if (elements.planDuration) appState.planDuration = parseInt(elements.planDuration.value);
    if (elements.communicationFrequency) appState.communicationFrequency = elements.communicationFrequency.value;
}

// Switch main tabs (Single Response vs Success Plan)
function switchMainTab(e) {
    const mode = e.target.dataset.mode;
    if (!mode) return;
    
    appState.mode = mode;
    
    // Update tab buttons
    elements.tabBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    // Update output modes
    elements.outputModes.forEach(outputMode => {
        outputMode.classList.add('hidden');
    });
    document.getElementById(`${mode}-output`).classList.remove('hidden');
    
    // Show/hide success plan options
    elements.successPlanOptions.forEach(option => {
        if (mode === 'sequence') {
            option.classList.remove('hidden');
            option.classList.add('visible');
        } else {
            option.classList.add('hidden');
            option.classList.remove('visible');
        }
    });
    
    // Update generate button text
    if (elements.btnText && elements.btnSuccessText) {
        if (mode === 'sequence') {
            elements.btnText.classList.add('hidden');
            elements.btnSuccessText.classList.remove('hidden');
        } else {
            elements.btnText.classList.remove('hidden');
            elements.btnSuccessText.classList.add('hidden');
        }
    }
}

// Switch response tabs (Email/Call/Nudge within Single mode)
function switchResponseTab(e) {
    const responseType = e.target.dataset.response;
    if (!responseType) return;
    
    appState.responseType = responseType;
    
    // Update response tab buttons
    elements.responseTabBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    // Update response sections
    elements.responseSections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(`${responseType}-section`).classList.remove('hidden');
}

// Generate response
function generateResponse() {
    updateState();
    
    if (appState.mode === 'single') {
        // Single response mode
        if (!appState.scenario) {
            alert('Please select a scenario first!');
            return;
        }
        
        // Generate for all response types
        const responses = {
            email: generateModeResponse('email'),
            call: generateModeResponse('call'),
            nudge: generateModeResponse('nudge')
        };
        
        // Update output areas
        elements.emailText.innerHTML = responses.email;
        elements.callText.innerHTML = responses.call;
        elements.nudgeText.innerHTML = responses.nudge;
    } else if (appState.mode === 'sequence') {
        // Success plan mode
        if (!appState.customerOutcome) {
            alert('Please select a customer outcome first!');
            return;
        }
        
        generateSuccessPlan();
    }
    
    // Add generation animation
    elements.generateBtn.classList.add('loading');
    setTimeout(() => {
        elements.generateBtn.classList.remove('loading');
    }, 1000);
}

// Generate response for specific mode
function generateModeResponse(mode) {
    const scenarioTemplates = templates[appState.scenario];
    if (!scenarioTemplates || !scenarioTemplates[mode]) {
        return 'Template not found for this scenario and mode.';
    }
    
    // Generate response based on mode
    let response = '';
    
    if (mode === 'email') {
        response = buildEmailResponse();
    } else if (mode === 'call') {
        response = buildCallResponse();
    } else if (mode === 'nudge') {
        response = buildNudgeResponse();
    }
    
    return response;
}

// Helper function to determine empathy level
function getEmpathyLevel() {
    if (appState.empathy <= 3) return 'low';
    else if (appState.empathy >= 8) return 'high';
    else return 'medium';
}

// Helper function to determine urgency level
function getUrgencyLevel() {
    if (appState.urgency <= 3) return 'low';
    else if (appState.urgency >= 8) return 'high';
    else return 'medium';
}

// Helper function to get tier description
function getTierDescription() {
    const tierDescriptions = {
        'smb': 'small businesses',
        'mid-market': 'mid-market organizations',
        'enterprise': 'enterprise companies'
    };
    return tierDescriptions[appState.csTier] || 'organizations';
}

// Build value proposition based on selected values
function buildValueProposition() {
    if (appState.values.length === 0) {
        return 'our comprehensive solution';
    }
    
    const valueTexts = appState.values.map(value => 
        valueTemplates[value][appState.csTier]
    );
    
    if (valueTexts.length === 1) {
        return valueTexts[0];
    } else if (valueTexts.length === 2) {
        return `${valueTexts[0]} and ${valueTexts[1]}`;
    } else {
        const lastValue = valueTexts.pop();
        return `${valueTexts.join(', ')}, and ${lastValue}`;
    }
}

// Build email response with enhanced template structure
function buildEmailResponse() {
    const scenarioTemplates = templates[appState.scenario];
    if (!scenarioTemplates || !scenarioTemplates.email) {
        return 'Template not found for this scenario.';
    }
    
    const emailTemplates = scenarioTemplates.email;
    const empathyLevel = getEmpathyLevel();
    const urgencyLevel = getUrgencyLevel();
    const tierDescription = getTierDescription();
    const valueProposition = buildValueProposition();
    const customerName = '[Customer Name]';
    const productName = '[Product]';
    
    // Build email sections
    const subject = emailTemplates.subject ? emailTemplates.subject[empathyLevel] : `Re: Your ${getScenarioName()}`;
    const greeting = emailTemplates.greeting ? emailTemplates.greeting[empathyLevel] : 'Dear [Customer],';
    const empathySection = emailTemplates.empathy[empathyLevel];
    const acknowledgmentSection = emailTemplates.acknowledgment ? emailTemplates.acknowledgment[empathyLevel] : '';
    const valueConnectionSection = emailTemplates.valueConnection ? 
        emailTemplates.valueConnection.replace('[tierDescription]', tierDescription).replace('[valueProposition]', valueProposition) : '';
    const urgencySection = emailTemplates.urgency[urgencyLevel];
    const closingSection = emailTemplates.closing ? emailTemplates.closing[empathyLevel] : 'Best regards,';
    
    // Replace placeholders
    const processedGreeting = greeting.replace('[Customer]', customerName);
    const processedEmpathy = empathySection.replace('[Customer]', customerName).replace('[Product]', productName);
    const processedUrgency = urgencySection.replace('[Customer]', customerName).replace('[Product]', productName);
    
    return `
        <div style="margin-bottom: 1rem;">
            <strong>Subject:</strong> ${subject}
        </div>
        <div style="margin-bottom: 1rem;">
            ${processedGreeting}
        </div>
        <div style="margin-bottom: 1rem;">
            ${processedEmpathy}
        </div>
        ${acknowledgmentSection ? `<div style="margin-bottom: 1rem;">${acknowledgmentSection}</div>` : ''}
        ${valueConnectionSection ? `<div style="margin-bottom: 1rem;">${valueConnectionSection}</div>` : ''}
        <div style="margin-bottom: 1rem;">
            ${processedUrgency}
        </div>
        <div style="margin-bottom: 1rem;">
            ${closingSection}<br>
            [Your Name]<br>
            [Your Title]<br>
            [Company Name]
        </div>
    `;
}

// Build call response with enhanced template structure
function buildCallResponse() {
    const scenarioTemplates = templates[appState.scenario];
    if (!scenarioTemplates || !scenarioTemplates.call) {
        return 'Template not found for this scenario.';
    }
    
    const callTemplates = scenarioTemplates.call;
    const empathyLevel = getEmpathyLevel();
    const urgencyLevel = getUrgencyLevel();
    const tierDescription = getTierDescription();
    const valueProposition = buildValueProposition();
    const customerName = '[Customer Name]';
    const productName = '[Product]';
    
    // Build call sections
    const openingSection = callTemplates.opening[empathyLevel];
    const acknowledgmentSection = callTemplates.acknowledgment ? callTemplates.acknowledgment[empathyLevel] : '';
    const valueDiscussionSection = callTemplates.valueDiscussion ? 
        callTemplates.valueDiscussion.replace('[tierDescription]', tierDescription).replace('[valueProposition]', valueProposition) : '';
    const urgencySection = callTemplates.urgency[urgencyLevel];
    const nextStepsSection = callTemplates.nextSteps ? callTemplates.nextSteps[urgencyLevel] : 'What would work best for you moving forward?';
    
    // Replace placeholders
    const processedOpening = openingSection.replace('[Customer]', customerName).replace('[Product]', productName);
    const processedUrgency = urgencySection.replace('[Customer]', customerName).replace('[Product]', productName);
    
    return `
        <div style="margin-bottom: 1rem;">
            <strong>Opening:</strong><br>
            ${processedOpening}
        </div>
        ${acknowledgmentSection ? `<div style="margin-bottom: 1rem;"><strong>Acknowledgment:</strong><br>${acknowledgmentSection}</div>` : ''}
        ${valueDiscussionSection ? `<div style="margin-bottom: 1rem;"><strong>Value Discussion:</strong><br>${valueDiscussionSection}</div>` : ''}
        <div style="margin-bottom: 1rem;">
            <strong>Addressing the Issue:</strong><br>
            ${processedUrgency}
        </div>
        <div style="margin-bottom: 1rem;">
            <strong>Next Steps:</strong><br>
            ${nextStepsSection}
        </div>
    `;
}

// Build nudge response with enhanced template structure
function buildNudgeResponse() {
    const scenarioTemplates = templates[appState.scenario];
    if (!scenarioTemplates || !scenarioTemplates.nudge) {
        return 'Template not found for this scenario.';
    }
    
    const nudgeTemplates = scenarioTemplates.nudge;
    const empathyLevel = getEmpathyLevel();
    const urgencyLevel = getUrgencyLevel();
    const tierDescription = getTierDescription();
    const valueProposition = buildValueProposition();
    const customerName = '[Customer Name]';
    const productName = '[Product]';
    
    // Build nudge sections
    const titleSection = nudgeTemplates.title[empathyLevel];
    const messageSection = nudgeTemplates.message[empathyLevel];
    const ctaSection = nudgeTemplates.cta[urgencyLevel];
    
    // Replace placeholders
    const processedMessage = messageSection.replace('[Customer]', customerName).replace('[Product]', productName);
    
    return `
        <div style="margin-bottom: 1rem;">
            <strong>Notification Title:</strong><br>
            ${titleSection}
        </div>
        <div style="margin-bottom: 1rem;">
            <strong>Message:</strong><br>
            ${processedMessage}
        </div>
        ${valueProposition !== 'our comprehensive solution' ? `<div style="margin-bottom: 1rem;"><strong>Value Highlight:</strong><br>Focus on ${valueProposition} with our tailored solutions.</div>` : ''}
        <div style="margin-bottom: 1rem;">
            <strong>Primary CTA:</strong><br>
            ${ctaSection}
        </div>
        <div style="margin-bottom: 1rem;">
            <strong>Additional CTAs:</strong><br>
            [Get Support] | [Schedule Call] | [Learn More]
        </div>
    `;
}

// Generate Success Plan - Enhanced with better template matching
function generateSuccessPlan() {
    const outcome = outcomeTemplates[appState.customerOutcome];
    if (!outcome) {
        alert('Invalid customer outcome selected!');
        return;
    }
    
    // Try to find a specific template sequence
    const sequences = sequenceTemplates[appState.customerOutcome];
    let sequence = null;
    
    if (sequences) {
        // First try to find exact match for frequency and duration
        if (sequences[appState.communicationFrequency] && 
            sequences[appState.communicationFrequency][appState.planDuration]) {
            sequence = sequences[appState.communicationFrequency][appState.planDuration];
        }
        // If no exact match, try to find any matching frequency
        else if (sequences[appState.communicationFrequency]) {
            const durations = Object.keys(sequences[appState.communicationFrequency]);
            const closestDuration = durations.reduce((closest, current) => {
                return Math.abs(current - appState.planDuration) < Math.abs(closest - appState.planDuration) ? current : closest;
            });
            sequence = sequences[appState.communicationFrequency][closestDuration];
        }
        // If no matching frequency, try to find any duration match in any frequency
        else {
            for (const freq of Object.keys(sequences)) {
                if (sequences[freq][appState.planDuration]) {
                    sequence = sequences[freq][appState.planDuration];
                    break;
                }
            }
        }
    }
    
    if (!sequence) {
        // Generate a smart generic sequence if no template exists
        const genericSequence = generateGenericSequence();
        updateSuccessPlanDisplay(outcome, genericSequence);
    } else {
        updateSuccessPlanDisplay(outcome, sequence);
    }
}

// Enhanced generic sequence generator for all outcome combinations
function generateGenericSequence() {
    const outcome = appState.customerOutcome;
    const duration = appState.planDuration;
    const frequency = appState.communicationFrequency;
    
    const outcomeTemplate = outcomeTemplates[outcome];
    if (!outcomeTemplate) {
        console.warn(`No template found for outcome: ${outcome}`);
        return generateFallbackSequence();
    }
    
    const phases = outcomeTemplate.phases;
    const phaseKeys = Object.keys(phases);
    const category = outcomeTemplate.category || 'general';
    
    // Enhanced frequency settings with category-based variations
    const frequencySettings = {
        light: { 
            baseInterval: Math.ceil(duration / 4), 
            minTouchpoints: Math.max(3, Math.ceil(duration / 15)),
            maxTouchpoints: Math.ceil(duration / 8),
            callFrequency: 0.3,
            emailFrequency: 0.5,
            nudgeFrequency: 0.2
        },
        standard: { 
            baseInterval: Math.ceil(duration / 6), 
            minTouchpoints: Math.max(4, Math.ceil(duration / 12)),
            maxTouchpoints: Math.ceil(duration / 6),
            callFrequency: 0.4,
            emailFrequency: 0.4,
            nudgeFrequency: 0.2
        },
        intensive: { 
            baseInterval: Math.ceil(duration / 10), 
            minTouchpoints: Math.max(6, Math.ceil(duration / 8)),
            maxTouchpoints: Math.ceil(duration / 4),
            callFrequency: 0.5,
            emailFrequency: 0.3,
            nudgeFrequency: 0.2
        },
        milestone: { 
            baseInterval: Math.ceil(duration / 5), 
            minTouchpoints: Math.max(4, Math.ceil(duration / 15)),
            maxTouchpoints: Math.ceil(duration / 7),
            callFrequency: 0.6,
            emailFrequency: 0.3,
            nudgeFrequency: 0.1
        }
    };
    
    const settings = frequencySettings[frequency] || frequencySettings.standard;
    const targetTouchpoints = Math.min(settings.maxTouchpoints, 
        Math.max(settings.minTouchpoints, Math.ceil(duration / settings.baseInterval)));
    
    const sequence = [];
    
    // Category-specific focus patterns
    const categoryFocusPatterns = {
        revenue: ['relationship-building', 'value-discussion', 'success-stories', 'loyalty-program', 'future-planning'],
        adoption: ['usage-analysis', 'training-invitation', 'quick-wins', 'progress-check', 'best-practices'],
        satisfaction: ['experience-assessment', 'feedback-collection', 'improvement-notification', 'satisfaction-check'],
        operational: ['needs-assessment', 'barrier-identification', 'progress-check', 'continuous-improvement'],
        education: ['training-invitation', 'best-practices', 'community-invitation', 'success-stories'],
        technical: ['usage-analysis', 'feature-exploration', 'advanced-features', 'implementation-support']
    };
    
    const focusPattern = categoryFocusPatterns[category] || categoryFocusPatterns.revenue;
    
    // Generate optimized sequence
    for (let i = 0; i < targetTouchpoints; i++) {
        // Calculate day with improved distribution
        let day;
        const progress = i / (targetTouchpoints - 1);
        
        if (targetTouchpoints === 1) {
            day = Math.ceil(duration / 2);
        } else {
            day = Math.ceil(progress * duration);
            
            // Add some intelligent variation while maintaining order
            if (i > 0 && i < targetTouchpoints - 1) {
                const variation = Math.floor(Math.random() * 6) - 3; // -3 to +3 days
                day = Math.max(sequence[sequence.length - 1]?.day + 1 || 1, 
                              Math.min(duration, day + variation));
            }
        }
        
        // Determine phase based on progress
        const phaseProgress = Math.min(1, progress);
        const phaseIndex = Math.floor(phaseProgress * phaseKeys.length);
        const phaseKey = phaseKeys[Math.min(phaseIndex, phaseKeys.length - 1)];
        const phaseName = phases[phaseKey];
        
        // Smart communication type selection
        let type;
        const position = i / (targetTouchpoints - 1);
        const rand = Math.random();
        
        if (frequency === 'intensive' && rand < settings.callFrequency) {
            type = 'call';
        } else if (frequency === 'milestone' && rand < settings.callFrequency) {
            type = 'call';
        } else if (i === 0 || i === targetTouchpoints - 1) {
            type = 'email'; // Always start and end with email
        } else if (rand < settings.emailFrequency) {
            type = 'email';
        } else if (rand < settings.emailFrequency + settings.nudgeFrequency) {
            type = 'nudge';
        } else {
            type = 'call';
        }
        
        // Smart focus selection based on position and category
        const focusIndex = Math.floor(position * focusPattern.length);
        const baseFocus = focusPattern[Math.min(focusIndex, focusPattern.length - 1)];
        
        // Add intelligence based on urgency/empathy for churn-related outcomes
        let focus = baseFocus;
        if (outcome.includes('churn') || outcome.includes('retention')) {
            if (i === 0) focus = 'urgent-intervention';
            else if (i === 1) focus = 'value-reminder';
            else if (position > 0.7) focus = 'relationship-stabilization';
        }
        
        // Generate contextual subject line
        const subject = generateContextualSubject(outcome, phaseName, type, focus, position);
        
        sequence.push({
            day: day,
            type: type,
            phase: phaseKey,
            subject: subject,
            focus: focus
        });
    }
    
    // Ensure sequence is properly sorted and days are unique
    const sortedSequence = sequence.sort((a, b) => a.day - b.day);
    
    // Fix any duplicate days
    for (let i = 1; i < sortedSequence.length; i++) {
        if (sortedSequence[i].day <= sortedSequence[i-1].day) {
            sortedSequence[i].day = sortedSequence[i-1].day + 1;
        }
    }
    
    return sortedSequence;
}

// Enhanced subject generation with better context awareness
function generateContextualSubject(outcome, phaseName, type, focus, position) {
    const focusTemplate = focusTemplates[focus];
    
    if (focusTemplate && focusTemplate[type]) {
        return focusTemplate[type];
    }
    
    // Fallback subject generation
    const outcomeWords = outcome.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    const typeSubjects = {
        email: {
            early: `${outcomeWords} Strategy Discussion`,
            mid: `${phaseName} Progress Review`,
            late: `${outcomeWords} Success Planning`
        },
        call: {
            early: `${outcomeWords} Planning Call`,
            mid: `${phaseName} Strategy Session`,
            late: `Success Review & Next Steps`
        },
        nudge: {
            early: `${outcomeWords} Opportunity`,
            mid: `${phaseName} Update`,
            late: `Continue Your Success`
        }
    };
    
    const timing = position < 0.3 ? 'early' : position > 0.7 ? 'late' : 'mid';
    return typeSubjects[type]?.[timing] || `${outcomeWords} Follow-up`;
}

// Fallback sequence for when no template is found
function generateFallbackSequence() {
    const duration = appState.planDuration;
    const milestones = [1, 7, 14, 30, 45, 60, 90, 120];
    
    return milestones
        .filter(day => day <= duration)
        .map((day, index) => ({
            day: day,
            type: index % 3 === 0 ? 'email' : index % 3 === 1 ? 'call' : 'nudge',
            phase: day <= duration / 3 ? 'discovery' : day <= (duration * 2) / 3 ? 'engagement' : 'optimization',
            subject: `Success Plan Milestone ${index + 1}`,
            focus: 'relationship-building'
        }));
}

// Update Success Plan Display
function updateSuccessPlanDisplay(outcome, sequence) {
    // Update plan summary
    const summaryHtml = `
        <div class="plan-summary-header">
            <h5>${outcome.title}</h5>
            <p class="plan-description">${outcome.description}</p>
        </div>
        <div class="plan-metrics">
            <strong>Key Metrics:</strong>
            <ul>
                ${outcome.keyMetrics.map(metric => `<li>${metric}</li>`).join('')}
            </ul>
        </div>
        <div class="plan-details">
            <div class="plan-detail">
                <strong>Duration:</strong> ${appState.planDuration} days
            </div>
            <div class="plan-detail">
                <strong>Communication Style:</strong> ${appState.communicationFrequency}
            </div>
            <div class="plan-detail">
                <strong>Customer Segment:</strong> ${getTierDescription()}
            </div>
            <div class="plan-detail">
                <strong>Total Touchpoints:</strong> ${sequence.length}
            </div>
        </div>
    `;
    
    elements.planSummaryContent.innerHTML = summaryHtml;
    
    // Update sequence display
    const sequenceHtml = generateSequenceDisplay(sequence);
    elements.sequenceContent.innerHTML = sequenceHtml;
}

// Generate sequence display HTML
function generateSequenceDisplay(sequence) {
    return `
        <div class="timeline-container">
            ${sequence.map((item, index) => {
                const typeEmoji = item.type === 'email' ? '📧' : item.type === 'call' ? '📞' : '💬';
                const phaseColor = item.phase === 'discovery' ? '#3b82f6' : 
                                  item.phase === 'engagement' ? '#10b981' : '#f59e0b';
                
                // Generate actual content for this touchpoint
                const content = generateTouchpointContent(item);
                
                return `
                    <div class="timeline-item">
                        <div class="timeline-header">
                            <span class="timeline-day">Day ${item.day}</span>
                            <span class="timeline-type" style="background-color: ${phaseColor};">
                                ${typeEmoji} ${item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                            </span>
                        </div>
                        <div class="timeline-content">
                            <h5>${item.subject}</h5>
                            <p><strong>Phase:</strong> ${item.phase.charAt(0).toUpperCase() + item.phase.slice(1)}</p>
                            <p><strong>Focus:</strong> ${item.focus}</p>
                            <div class="timeline-preview">
                                <strong>Content Preview:</strong>
                                <div class="content-preview">${content}</div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

// Enhanced touchpoint content generator with comprehensive focus support
function generateTouchpointContent(item) {
    const focus = focusTemplates[item.focus];
    const empathyLevel = getEmpathyLevel();
    const urgencyLevel = getUrgencyLevel();
    const tierDescription = getTierDescription();
    const valueProposition = buildValueProposition();
    
    // Fallback to relationship-building if focus not found
    const focusData = focus || focusTemplates['relationship-building'];
    
    // Get the specific content for this communication type
    const focusContent = focusData[item.type] || focusData.purpose;
    
    // Generate empathy-based greeting
    const greetings = {
        low: 'Hello [Customer Name],',
        medium: 'Hi [Customer Name],',
        high: 'Dear [Customer Name],'
    };
    
    // Generate urgency-based closing
    const closings = {
        low: 'Looking forward to connecting when convenient.',
        medium: 'Let\'s schedule time to discuss this week.',
        high: 'I\'d appreciate the opportunity to connect today.'
    };
    
    const greeting = greetings[empathyLevel];
    const closing = closings[urgencyLevel];
    
    if (item.type === 'email') {
        // Enhanced email content with personalization
        let emailBody = '';
        
        // Special handling for urgent intervention
        if (item.focus === 'urgent-intervention') {
            emailBody = `I wanted to reach out immediately to address any concerns you might have. Your success is our top priority, and I want to ensure we're providing exactly what you need.`;
        }
        // Value-focused content
        else if (item.focus.includes('value')) {
            emailBody = `${focusContent}. For ${tierDescription} like yours, ${valueProposition} represents a significant opportunity for growth and success.`;
        }
        // Training and education focused
        else if (item.focus.includes('training') || item.focus.includes('education')) {
            emailBody = `${focusContent}. I've identified some valuable resources that can help you maximize your investment and achieve your goals more effectively.`;
        }
        // Relationship focused
        else if (item.focus.includes('relationship') || item.focus.includes('loyalty')) {
            emailBody = `${focusContent}. As a valued customer, I want to ensure you're getting maximum value from our partnership.`;
        }
        // Generic fallback
        else {
            emailBody = `${focusContent}. I believe this will provide significant value for your organization.`;
        }
        
        return `
            <div class="touchpoint-content">
                <strong>Subject:</strong> ${item.subject}<br>
                <strong>Email Body:</strong><br>
                ${greeting}<br><br>
                ${emailBody}<br><br>
                ${closing}<br><br>
                <strong>Primary CTA:</strong> ${focusData.cta}
            </div>
        `;
    } 
    else if (item.type === 'call') {
        // Enhanced call script with conversation flow
        let talkingPoints = '';
        
        if (item.focus === 'urgent-intervention') {
            talkingPoints = 'Express immediate concern for their success, identify specific pain points, propose immediate solutions';
        }
        else if (item.focus.includes('analysis') || item.focus.includes('assessment')) {
            talkingPoints = 'Review current situation, identify opportunities, discuss potential improvements';
        }
        else if (item.focus.includes('demonstration') || item.focus.includes('training')) {
            talkingPoints = 'Show relevant features, explain benefits, provide hands-on guidance';
        }
        else {
            talkingPoints = 'Build rapport, understand needs, provide value, establish next steps';
        }
        
        return `
            <div class="touchpoint-content">
                <strong>Call Opening:</strong> ${greeting.replace(',', '')} ${focusContent}<br>
                <strong>Discussion Points:</strong> ${talkingPoints}<br>
                <strong>Call-to-Action:</strong> ${focusData.cta}<br>
                <strong>Tone:</strong> ${focusData.tone}
            </div>
        `;
    } 
    else {
        // Enhanced in-app nudge with personalization
        let nudgeMessage = '';
        
        if (item.focus.includes('quick-wins')) {
            nudgeMessage = '🎯 Ready for some quick wins? We\'ve identified easy improvements that could boost your results immediately.';
        }
        else if (item.focus.includes('urgent')) {
            nudgeMessage = '🚨 We noticed you might need immediate assistance. Our team is standing by to help.';
        }
        else if (item.focus.includes('community')) {
            nudgeMessage = '👥 Join our community of successful customers sharing tips and best practices.';
        }
        else if (item.focus.includes('advanced')) {
            nudgeMessage = '🚀 You\'re ready for advanced features! Discover capabilities that will take you to the next level.';
        }
        else if (item.focus.includes('success') || item.focus.includes('celebration')) {
            nudgeMessage = '🎉 Celebrating your progress! See how far you\'ve come and what\'s next.';
        }
        else {
            nudgeMessage = `💡 ${focusContent}`;
        }
        
        return `
            <div class="touchpoint-content">
                <strong>Notification Title:</strong> ${item.subject}<br>
                <strong>Message:</strong> ${nudgeMessage}<br>
                <strong>Primary Button:</strong> ${focusData.cta}<br>
                <strong>Secondary Action:</strong> Learn more
            </div>
        `;
    }
}

// Copy Success Plan
function copySuccessPlan() {
    const planContent = elements.planSummaryContent.innerText + '\n\n' + elements.sequenceContent.innerText;
    copyTextToClipboard(planContent, 'Success plan copied to clipboard!');
}

// Download Success Plan
function downloadSuccessPlan() {
    const planContent = elements.planSummaryContent.innerText + '\n\n' + elements.sequenceContent.innerText;
    downloadTextAsFile(planContent, `${appState.customerOutcome}_success_plan.txt`, 'Success plan downloaded!');
}

// Preview Timeline
function previewTimeline() {
    // Toggle between detailed and timeline view
    const sequenceContainer = elements.sequenceContent;
    const isTimelineView = sequenceContainer.classList.contains('timeline-view');
    
    if (isTimelineView) {
        sequenceContainer.classList.remove('timeline-view');
        elements.previewTimeline.textContent = '📅 Timeline View';
    } else {
        sequenceContainer.classList.add('timeline-view');
        elements.previewTimeline.textContent = '📋 Detailed View';
    }
}

// Helper function to copy text to clipboard
function copyTextToClipboard(text, successMessage) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification(successMessage);
    }).catch(err => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification(successMessage);
    });
}

// Helper function to download text as file
function downloadTextAsFile(text, filename, successMessage) {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showNotification(successMessage);
}

// Get scenario name for display
function getScenarioName() {
    const scenarioNames = {
        // Core Customer Support
        'upset-pricing': 'Pricing Inquiry',
        'inactive-onboarding': 'Onboarding Support',
        'confused-feature': 'Feature Questions',
        'ready-upsell': 'Growth Opportunities',
        'negative-feedback': 'Feedback Response',
        // Technical & Support
        'technical-issue': 'Technical Support',
        'integration-question': 'Integration Support',
        'performance-concern': 'Performance Optimization',
        // Account & Business
        'renewal-discussion': 'Renewal Planning',
        'billing-inquiry': 'Billing Support',
        // Data & Migration
        'data-migration': 'Data Migration',
        'api-documentation': 'API Documentation',
        // Strategy & Competition
        'competitive-concern': 'Competitive Analysis',
        'compliance-requirement': 'Compliance Support',
        'training-request': 'Training Support'
    };
    return scenarioNames[appState.scenario] || 'Customer Inquiry';
}

// Copy to clipboard
async function copyToClipboard(mode) {
    const textElement = document.getElementById(`${mode}Text`);
    const text = textElement.innerText;
    
    try {
        await navigator.clipboard.writeText(text);
        showNotification(`${mode.charAt(0).toUpperCase() + mode.slice(1)} response copied to clipboard!`);
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification(`${mode.charAt(0).toUpperCase() + mode.slice(1)} response copied to clipboard!`);
    }
}

// Download text as file
function downloadText(mode) {
    const textElement = document.getElementById(`${mode}Text`);
    const text = textElement.innerText;
    const filename = `${getScenarioName()}_${mode}_response.txt`;
    
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification(`${mode.charAt(0).toUpperCase() + mode.slice(1)} response downloaded!`);
}

// Export all responses
function exportAll() {
    if (!appState.scenario) {
        alert('Please generate responses first!');
        return;
    }
    
    const allResponses = `
EMPATHY-POWERED PLAYBOOK GENERATOR
${getScenarioName()} - Complete Response Set
Generated on: ${new Date().toLocaleDateString()}

Settings:
- Empathy Level: ${appState.empathy}/10
- Urgency Level: ${appState.urgency}/10
- Customer Segment: ${appState.csTier.toUpperCase()}
- Value Focus: ${appState.values.join(', ') || 'None selected'}

===============================================

EMAIL RESPONSE:
${elements.emailText.innerText}

===============================================

CALL SCRIPT:
${elements.callText.innerText}

===============================================

IN-APP NUDGE:
${elements.nudgeText.innerText}

===============================================
    `;
    
    const blob = new Blob([allResponses], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${getScenarioName()}_Complete_Playbook.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Complete playbook exported!');
}

// Reset all inputs
function resetAll() {
    elements.scenario.value = '';
    elements.empathy.value = 5;
    elements.urgency.value = 5;
    elements.csTier.value = 'smb';
    elements.valueCheckboxes.forEach(cb => cb.checked = false);
    
    // Reset output areas
    const defaultText = 'Select a scenario and click "Generate Playbook" to see your personalized response.';
    elements.emailText.innerHTML = defaultText;
    elements.callText.innerHTML = defaultText;
    elements.nudgeText.innerHTML = defaultText;
    
    // Reset tab to email
    elements.tabBtns.forEach(btn => btn.classList.remove('active'));
    elements.tabBtns[0].classList.add('active');
    elements.outputModes.forEach(mode => mode.classList.add('hidden'));
    elements.outputModes[0].classList.remove('hidden');
    
    updateSliderValues();
    updateState();
    
    showNotification('All settings reset to defaults!');
}

// Theme management
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    elements.themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    
    showNotification(`Switched to ${newTheme} theme!`);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    elements.themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--success-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', init); 