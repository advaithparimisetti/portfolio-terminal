export const projects = [
  {
  ticker: 'SAMPADA',
  name: 'SAMPADA',
  sector: 'FinTech',
  price: '145.00',
  change: '+8.7%',
  desc: 'Global equity research workspace covering 14+ markets with DCF/comps valuation, peer benchmarking, FinBERT sentiment, analyst consensus, football fields, model validation, and one-click pitchbook generation.',
  tech: ['Python', 'FastAPI', 'React', 'Firebase', 'FinBERT', 'Vercel'],
  link: 'https://github.com/advaithparimisetti/sampada',
  demo: 'https://sampada-xi.vercel.app/'
},
  {
    ticker: 'DHANAM',
    name: 'Automated Equity Research Engine',
    sector: 'FinTech',
    price: '95.00',
    change: '+4.2%',
    desc: 'Proprietary 40-point scoring algorithm for valuing stocks across NSE/NYSE.',
    tech: ['Python', 'DCF', 'yFinance'],
    link: 'https://github.com/advaithparimisetti/Automated-Equity-Research-Valuation-Engine',
    demo: 'https://dhanam-three.vercel.app/'
  },
  {
    ticker: 'VCM-RISK', // Voluntary Carbon Market - Risk
    name: 'IEEE Pub: Carbon Market ML Risk Framework',
    sector: 'ESG Quant',
    price: '50.00',    // Representing the $50B projected market value
    change: '+9.4%',   // Simulated terminal data
    desc: 'IEEE published research proposing an ensemble ML anomaly detection framework and Layer-2 ledger to identify non-compliant assets and ensure settlement integrity in the Voluntary Carbon Market.',
    tech: ['Python', 'XGBoost', 'TensorFlow', 'Solidity', 'Risk Modeling'], 
    link: 'https://ieeexplore.ieee.org/document/11542032', // Replace with your actual IEEE Xplore link
    demo: null 
  },
  {
    ticker: 'AI-PORT',
    name: 'AI Portfolio Manager',
    sector: 'Quant',
    price: '88.50',
    change: '+2.1%',
    desc: 'Real-time dashboard using LSTM & Random Forest for price forecasting.',
    tech: ['TensorFlow', 'Scikit-Learn', 'Seaborn'],
    link: 'https://github.com/advaithparimisetti/AI-Driven-Stock-Analysis-Portfolio-Management-System-',
    demo: 'https://ai-driven-stock-analysis-portfolio-management-system.streamlit.app/'
  },
  {
    ticker: 'BL-ALLOC', // You can change this ticker
    name: 'Black-Litterman Sector Allocation Engine',
    sector: 'Quant',
    price: '115.20',    // Simulated terminal data
    change: '+3.8%',    // Simulated terminal data
    desc: '25-year NIFTY sector allocation framework using Black-Litterman optimization and walk-forward out-of-sample backtesting.',
    tech: ['Pandas', 'CVXPY', 'PyPortfolioOpt', 'SciPy'], // Update with your actual tech stack
    link: 'https://colab.research.google.com/drive/1a88eQE0RVeM9Sxw6jSLTKjlKz9WVT9CF?usp=sharing', // Add your GitHub link here
    demo: 'https://colab.research.google.com/drive/1a88eQE0RVeM9Sxw6jSLTKjlKz9WVT9CF?usp=sharing' // Add a demo link if you have one, or leave as null
  },
  {
    ticker: 'MEMO-AGT',
    name: 'Investment Memo Agent',
    sector: 'AI Ops',
    price: '102.4',
    change: '+15%',
    desc: 'Autonomous agent that scrapes web data to write Wall St grade memos.',
    tech: ['Phidata', 'Groq (Llama 3)', 'FastAPI'],
    link: 'https://github.com/advaithparimisetti/Investment-Memo-Generator',
    demo: 'https://investment-memo-generator.onrender.com/'
  },
  {
    ticker: 'SHELFBND',
    name: 'ShelfBound Platform',
    sector: 'SaaS',
    price: '45.20',
    change: '+0.5%',
    desc: 'Full-stack MERN application with secure JWT auth and complex schemas.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    link: 'https://github.com/advaithparimisetti/shelf-bound',
    demo: null
  }
];

export const skills = [
  { name: 'Python', value: 95 },
  { name: 'JavaScript', value: 90 },
  { name: 'Financial Modeling', value: 85 },
  { name: 'React', value: 88 },
  { name: 'Machine Learning', value: 82 },
  { name: 'Quantitative Analysis', value: 80 }
];

export const reports = [
  {
    id: 'RPT-IEEE-VCM',
    title: 'IEEE: Carbon Market ML Risk Framework',
    category: 'Published Research',
    date: '2026',
    summary: 'IEEE published research proposing an ensemble machine learning classifier and Layer-2 blockchain architecture to detect, filter, and immutably record non-compliant carbon credit assets.',
    link: 'https://ieeexplore.ieee.org/document/11542032' // Replace with your actual IEEE Xplore link
  },
  {
    id: 'RPT-DRREDDY',
    title: 'Dr. Reddy\'s Laboratories: Research Report',
    category: 'Equity Research',
    date: '2024',
    summary: 'Fundamental analysis of Dr. Reddy\'s US generics growth, biosimilars pipeline, and financial performance metrics.',
    link: 'https://drive.google.com/file/d/17IS-rMxA91hMV8rG-_e09Hyx31PFL1mW/view?usp=drive_link'
  },
  {
    id: 'RPT-GENAI',
    title: 'Generative AI Infrastructure: Capital Cycle Risks',
    category: 'Institutional Research',
    date: 'Dec 15, 2025',
    summary: 'Investigates the "Depreciation-Insolvency Hypothesis" in AI infrastructure, analyzing the disconnect between asset pricing and GPU durability.',
    link: 'https://drive.google.com/file/d/1rTnLjiTQVzTviRwWCDx7wvvbDUqesuY-/view?usp=drive_link'
  },
  {
    id: 'RPT-DEFENCE',
    title: 'The Rise of Indian Defence-Tech & Aerospace',
    category: 'Sector Analysis',
    date: '2025',
    summary: 'Analysis of the structural re-allocation of capital toward defence tech, covering indigenous primes, supply chains, and export growth.',
    link: 'https://drive.google.com/file/d/1npFqZTqLVIjVIG1RtnkInp7Q-Nc90TWy/view?usp=drive_link'
  },
  {
    id: 'RPT-FINTECH',
    title: 'Cross-Border Fintech & Global Payments',
    category: 'FinTech Strategy',
    date: '2024',
    summary: 'Strategic valuation of global payments and embedded finance, focusing on the $194T B2B cross-border market and infrastructure rails.',
    link: 'https://drive.google.com/file/d/1uScQ9jHkiZP1LtWZ4S3q-oNBDXeSabmv/view?usp=drive_link'
  },
  {
    id: 'RPT-MUSIC',
    title: 'Music Sentiment & Market Performance (India)',
    category: 'Quant Research',
    date: '2020-2024',
    summary: 'Quantitative study linking aggregate population mood (via Spotify valence) to Nifty 50 returns, exploring behavioral finance in emerging markets.',
    link: 'https://drive.google.com/file/d/1pgZ58UEGUTXTKotfapLR0wbeEuPIOPio/view?usp=drive_link'
  }  
];
