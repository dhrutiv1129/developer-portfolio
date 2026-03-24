export const projectsData = [
    {
        id: 1,
        name: 'PCA / SVD Visualizer',
        description: "Built an interactive browser-based tool to explore Principal Component Analysis (PCA) and Singular Value Decomposition (SVD) in real time. Implemented all underlying math from scratch (Jacobi SVD, covariance PCA, analytic eigendecomposition) without external libraries. Features include a live 2D scatter plot with dynamically updating principal components, a matrix decomposition editor for full UΣVᵀ factorization, and an animated scree plot for variance explained with low-rank approximation controls.",
        tools: ['JavaScript', 'HTML', 'CSS', 'Linear Algebra'],
        role: "Software",
        code: 'https://github.com/dhrutiv1129/PCA-SVD-Visualizer',
        demo: 'https://heartfelt-zabaione-dd5864.netlify.app/',
    },
    {
        id: 2,
        name: 'Financial Planning Tool (In Progress)',
        description: "Developing an AI-assisted financial planning application to analyze user spending, generate insights, and produce personalized financial reports. Integrating data persistence, forecasting models, and interactive dashboards to help users track and optimize financial decisions over time.",
        tools: ['React', 'Firebase', 'OpenAI API', 'Node.js'],
        role: 'Software',
        code: '',
        demo: '',
    },
    {
        id: 3,
        name: 'Option Pricing Model (Monte Carlo Simulation)',
        description: "Implemented a Monte Carlo simulation engine to estimate the theoretical price of financial options. Simulates thousands of stock price paths using Geometric Brownian Motion (GBM), computes payoffs for call/put options, and discounts expected values using a risk-free rate. Designed to analyze the impact of volatility, time to expiration, and strike price on option valuation.",
        tools: ['Python', 'NumPy', 'Mathematics', 'Finance'],
        role: 'Software',
        code: 'https://github.com/dhrutiv1129/options',
        demo: 'https://options-crrmmzwtzusappq8vbcamve.streamlit.app/',
    },
    {
        id: 4,
        name: 'Bug Meme Roaster',
        description: "Built a developer tool that humorously 'roasts' users based on the number of bugs in their code. Monitors errors in real time and dynamically displays meme-based feedback (The Incredibles) tied to bug count. Designed to make debugging slightly less painful and slightly more chaotic.",
        tools: ['JavaScript', 'VS Code Extension API', 'UI/UX'],
        role: 'Software',
        code: 'https://github.com/dhrutiv1129/bug-meme-roaster',
        demo: '',
     }

        
    
    ,
   {
    id: 5,
    name: 'iMessage Bot (In Progress)',
    description: "Building an automated iMessage bot that responds to user inputs in real time using custom logic and APIs. Designed to handle conversational interactions, trigger actions, and simulate human-like responses within Apple’s messaging ecosystem. Focused on creating a seamless, responsive, and slightly mischievous messaging experience.",
    tools: ['JavaScript', 'Node.js', 'APIs', 'Automation'],
    role: 'Software',
    code: 'https://github.com/dhrutiv1129/TextMessenger',
    demo: '',
}
   ,{
        id: 6,
        name: 'Explore My Work',
        isCTA: true
    }
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },