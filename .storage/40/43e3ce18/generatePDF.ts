import jsPDF from 'jspdf';

export const generateWhitepaperPDF = () => {
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - 2 * margin;
  let yPosition = margin;

  // Helper function to add new page if needed
  const checkAndAddPage = (requiredSpace: number) => {
    if (yPosition + requiredSpace > pageHeight - margin) {
      pdf.addPage();
      yPosition = margin;
      return true;
    }
    return false;
  };

  // Helper function to add text with word wrap
  const addText = (text: string, fontSize: number, fontStyle: string = 'normal', color: [number, number, number] = [0, 0, 0]) => {
    pdf.setFontSize(fontSize);
    pdf.setFont('helvetica', fontStyle);
    pdf.setTextColor(color[0], color[1], color[2]);
    const lines = pdf.splitTextToSize(text, contentWidth);
    const lineHeight = fontSize * 0.5;
    
    lines.forEach((line: string) => {
      checkAndAddPage(lineHeight);
      pdf.text(line, margin, yPosition);
      yPosition += lineHeight;
    });
  };

  // Helper function to add section header
  const addSectionHeader = (title: string, sectionNumber: number) => {
    checkAndAddPage(20);
    yPosition += 5;
    
    // Add colored line
    pdf.setFillColor(147, 51, 234); // Purple
    pdf.rect(margin, yPosition, 3, 10, 'F');
    
    // Add section number
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(147, 51, 234);
    pdf.text(`SECTION ${sectionNumber}`, margin + 8, yPosition + 7);
    
    yPosition += 12;
    
    // Add title
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(0, 0, 0);
    const titleLines = pdf.splitTextToSize(title, contentWidth);
    titleLines.forEach((line: string) => {
      pdf.text(line, margin, yPosition);
      yPosition += 8;
    });
    
    yPosition += 3;
  };

  // Helper function to add bullet point
  const addBullet = (text: string) => {
    checkAndAddPage(10);
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(0, 0, 0);
    
    // Add bullet
    pdf.circle(margin + 2, yPosition - 1, 0.8, 'F');
    
    // Add text
    const lines = pdf.splitTextToSize(text, contentWidth - 8);
    lines.forEach((line: string, index: number) => {
      pdf.text(line, margin + 6, yPosition);
      yPosition += 5;
    });
  };

  // Cover Page
  pdf.setFillColor(147, 51, 234); // Purple gradient simulation
  pdf.rect(0, 0, pageWidth, 80, 'F');
  
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(32);
  pdf.setFont('helvetica', 'bold');
  pdf.text('CRYPTO PUMP MEME', pageWidth / 2, 35, { align: 'center' });
  
  pdf.setFontSize(20);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Whitepaper', pageWidth / 2, 50, { align: 'center' });
  
  pdf.setFontSize(12);
  pdf.text('Version 1.0 | 2025', pageWidth / 2, 65, { align: 'center' });
  
  yPosition = 100;
  
  // Tagline
  pdf.setTextColor(147, 51, 234);
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.text('The Meme That Thinks Before It Pumps', pageWidth / 2, yPosition, { align: 'center' });
  
  yPosition += 20;
  
  // Key Information Box
  pdf.setDrawColor(147, 51, 234);
  pdf.setLineWidth(0.5);
  pdf.rect(margin, yPosition, contentWidth, 40);
  
  yPosition += 10;
  pdf.setFontSize(10);
  pdf.setTextColor(0, 0, 0);
  pdf.setFont('helvetica', 'bold');
  
  const keyInfo = [
    ['Token Symbol:', 'CPM'],
    ['Total Supply:', '400,000,000,000 CPM'],
    ['Networks:', 'Ethereum + Base'],
    ['Contract Address:', '0x2db4c12c7c7224a3655b5a2945c0128a27e76bfa'],
  ];
  
  keyInfo.forEach(([label, value]) => {
    pdf.text(label, margin + 5, yPosition);
    pdf.setFont('helvetica', 'normal');
    pdf.text(value, margin + 50, yPosition);
    pdf.setFont('helvetica', 'bold');
    yPosition += 8;
  });
  
  // New page for content
  pdf.addPage();
  yPosition = margin;
  
  // Table of Contents
  pdf.setFontSize(18);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(0, 0, 0);
  pdf.text('Table of Contents', margin, yPosition);
  yPosition += 10;
  
  const toc = [
    '1. Introduction: The Rise of the Meme Revolution',
    '2. Vision and Philosophy',
    '3. The Technology: CPM Smart Pump Engine',
    '4. Utilities & Ecosystem',
    '5. Tokenomics',
    '6. The Team Behind the Revolution',
    '7. Roadmap',
    '8. Future Vision & Disclaimer',
  ];
  
  pdf.setFontSize(11);
  pdf.setFont('helvetica', 'normal');
  toc.forEach((item) => {
    pdf.text(item, margin + 5, yPosition);
    yPosition += 7;
  });
  
  // Section 1: Introduction
  pdf.addPage();
  yPosition = margin;
  addSectionHeader('Introduction: The Rise of the Meme Revolution', 1);
  
  addText('Welcome to Crypto Pump Meme (CPM) – where the chaos of meme culture meets the precision of artificial intelligence and the transparency of blockchain technology.', 11);
  yPosition += 5;
  
  addText('CPM is not just another meme token. It is a movement powered by AI-driven pump intelligence, social engagement, and decentralized fun. Our mission is to transform the power of viral communities into a smart, data-fueled ecosystem that rewards creativity, participation, and collective energy.', 11);
  yPosition += 5;
  
  addText('The meme era has shown us one truth: communities are stronger than institutions. CPM channels that strength into an intelligent "Pump Engine" — predicting, fueling, and amplifying the next big wave in crypto culture.', 11);
  
  // Section 2: Vision and Philosophy
  pdf.addPage();
  yPosition = margin;
  addSectionHeader('Vision and Philosophy', 2);
  
  pdf.setFont('helvetica', 'bold');
  addText('Vision:', 12, 'bold', [147, 51, 234]);
  yPosition += 2;
  addText('To build the world\'s first AI-Driven Meme Ecosystem that transforms internet culture into a measurable economic force — a revolution of humor, technology, and profit.', 11);
  yPosition += 8;
  
  pdf.setFont('helvetica', 'bold');
  addText('Philosophy:', 12, 'bold', [147, 51, 234]);
  yPosition += 2;
  addText('CPM believes that memes are not jokes — they are cultural data packets, expressions of digital emotion. Our blockchain-backed AI analyzes global meme trends, identifies upcoming surges ("pump zones"), and rewards early participants with smart incentives.', 11);
  yPosition += 8;
  
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(147, 51, 234);
  pdf.text('"The Meme That Thinks Before It Pumps."', pageWidth / 2, yPosition, { align: 'center' });
  
  // Section 3: Technology
  pdf.addPage();
  yPosition = margin;
  addSectionHeader('The Technology: CPM Smart Pump Engine', 3);
  
  addText('The CPM Pump Engine is an advanced AI system that integrates social sentiment analysis, data analytics, and predictive algorithms to detect early viral momentum across the internet.', 11);
  yPosition += 8;
  
  pdf.setFont('helvetica', 'bold');
  addText('Core Components:', 12, 'bold');
  yPosition += 5;
  
  addBullet('AI Trend Detector: Scans Twitter/X, Discord, Telegram, and Reddit for meme trend signals.');
  addBullet('Smart Pump Index (SPI): A real-time indicator showing potential "pump readiness" based on sentiment and activity data.');
  addBullet('Blockchain Integration: Smart contracts automatically reward users who engage during optimal pump periods.');
  addBullet('Base + Ethereum Dual Chain System: High speed on Base, global liquidity on Ethereum.');
  
  // Section 4: Utilities
  pdf.addPage();
  yPosition = margin;
  addSectionHeader('Utilities & Ecosystem', 4);
  
  addText('CPM offers a variety of utilities designed to merge entertainment, profitability, and technology:', 11);
  yPosition += 8;
  
  const utilities = [
    {
      title: '1. Meme-to-Earn Platform',
      desc: 'Users can create and submit memes. Viral memes earn CPM tokens based on engagement metrics like shares, votes, and reach. Creativity = Currency.',
    },
    {
      title: '2. CPM AI Pump Signals',
      desc: 'A subscription-based analytics tool powered by the CPM Pump Engine. It provides early alerts for trending meme tokens and cultural waves before they explode.',
    },
    {
      title: '3. NFT Meme Arsenal',
      desc: 'Every high-impact meme can be minted as an NFT on the Base chain, stored in our Meme Arsenal marketplace, and traded by collectors and fans.',
    },
    {
      title: '4. DeFi Pump Hub',
      desc: 'A staking and farming system where holders earn Pump Rewards for locking their CPM tokens and participating in coordinated pump events.',
    },
    {
      title: '5. CPM VR World (Metaverse Extension)',
      desc: 'A gamified metaverse where users can join virtual pump events, interact with other meme creators, and witness live token surges inside a 3D digital environment.',
    },
  ];
  
  utilities.forEach((utility) => {
    checkAndAddPage(25);
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(11);
    pdf.setTextColor(147, 51, 234);
    pdf.text(utility.title, margin, yPosition);
    yPosition += 6;
    
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(0, 0, 0);
    const lines = pdf.splitTextToSize(utility.desc, contentWidth);
    lines.forEach((line: string) => {
      pdf.text(line, margin, yPosition);
      yPosition += 5;
    });
    yPosition += 5;
  });
  
  // Section 5: Tokenomics
  pdf.addPage();
  yPosition = margin;
  addSectionHeader('Tokenomics', 5);
  
  addText('Token Symbol: CPM', 11, 'bold');
  addText('Network: Ethereum & Base', 11, 'bold');
  addText('Total Supply: 400,000,000,000 CPM', 11, 'bold');
  yPosition += 8;
  
  const tokenomics = [
    { category: 'Development', percentage: '40%', amount: '160,000,000,000 CPM', desc: 'Funding for technology, AI infrastructure, contracts, and long-term ecosystem growth.' },
    { category: 'Community Rewards', percentage: '25%', amount: '100,000,000,000 CPM', desc: 'Incentives, competitions, and Meme-to-Earn rewards.' },
    { category: 'Airdrop', percentage: '30%', amount: '120,000,000,000 CPM', desc: 'Distribution to expand the global CPM community.' },
    { category: 'Team', percentage: '5%', amount: '20,000,000,000 CPM', desc: 'Reserved for the core team with vesting schedules for transparency.' },
  ];
  
  tokenomics.forEach((item) => {
    checkAndAddPage(20);
    
    pdf.setFillColor(240, 240, 255);
    pdf.rect(margin, yPosition - 3, contentWidth, 18, 'F');
    
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(12);
    pdf.setTextColor(147, 51, 234);
    pdf.text(item.category, margin + 3, yPosition + 3);
    
    pdf.setFontSize(14);
    pdf.text(item.percentage, pageWidth - margin - 30, yPosition + 3);
    
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(9);
    pdf.setTextColor(100, 100, 100);
    pdf.text(item.amount, margin + 3, yPosition + 9);
    
    yPosition += 13;
    
    pdf.setFontSize(10);
    pdf.setTextColor(0, 0, 0);
    const lines = pdf.splitTextToSize(item.desc, contentWidth - 6);
    lines.forEach((line: string) => {
      pdf.text(line, margin + 3, yPosition);
      yPosition += 5;
    });
    
    yPosition += 8;
  });
  
  // Section 6: Team
  pdf.addPage();
  yPosition = margin;
  addSectionHeader('The Team Behind the Revolution', 6);
  
  addText('The CPM team is a group of visionary innovators, each bringing expertise in blockchain, AI, design, and viral marketing.', 11);
  yPosition += 8;
  
  const team = [
    { name: 'Ethan "CodeLord" Reeves', role: 'CTO / Founder', nationality: 'USA', bio: 'Blockchain developer since 2016, former Chainlink contributor, AI systems architect.' },
    { name: 'Maya "PumpQueen" Carter', role: 'Creative Director', nationality: 'USA', bio: 'Meme culture strategist and digital artist shaping the CPM identity.' },
    { name: 'Zane "MetaWolf" Brooks', role: 'Marketing Lead', nationality: 'USA', bio: 'Viral growth expert, known for orchestrating global meme campaigns.' },
    { name: 'Dr. Logan "DataVortex" Hayes', role: 'Head of AI Systems', nationality: 'USA', bio: 'Data scientist specializing in sentiment analysis and predictive modeling.' },
  ];
  
  team.forEach((member) => {
    checkAndAddPage(20);
    
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(11);
    pdf.setTextColor(0, 0, 0);
    pdf.text(member.name, margin, yPosition);
    yPosition += 6;
    
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    pdf.setTextColor(147, 51, 234);
    pdf.text(member.role, margin, yPosition);
    yPosition += 5;
    
    pdf.setTextColor(100, 100, 100);
    pdf.text(`🇺🇸 ${member.nationality}`, margin, yPosition);
    yPosition += 6;
    
    pdf.setTextColor(0, 0, 0);
    const lines = pdf.splitTextToSize(member.bio, contentWidth);
    lines.forEach((line: string) => {
      pdf.text(line, margin, yPosition);
      yPosition += 5;
    });
    yPosition += 5;
  });
  
  // Section 7: Roadmap
  pdf.addPage();
  yPosition = margin;
  addSectionHeader('Roadmap', 7);
  
  const roadmap = [
    { quarter: 'Q1 2025', milestone: 'Token launch on Ethereum + Base, Website v1 release' },
    { quarter: 'Q2 2025', milestone: 'Global Airdrop, Community Launchpad, First Pump Event' },
    { quarter: 'Q3 2025', milestone: 'AI Pump Engine Beta, Meme-to-Earn Live' },
    { quarter: 'Q4 2025', milestone: 'NFT Meme Arsenal + DeFi Pump Hub release' },
    { quarter: 'Q1 2026', milestone: 'CPM VR World Launch + Major Exchange Listings' },
  ];
  
  roadmap.forEach((item) => {
    checkAndAddPage(15);
    
    pdf.setFillColor(147, 51, 234);
    pdf.circle(margin + 3, yPosition + 2, 2, 'F');
    
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(11);
    pdf.setTextColor(147, 51, 234);
    pdf.text(item.quarter, margin + 8, yPosition + 4);
    yPosition += 7;
    
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    pdf.setTextColor(0, 0, 0);
    const lines = pdf.splitTextToSize(item.milestone, contentWidth - 8);
    lines.forEach((line: string) => {
      pdf.text(line, margin + 8, yPosition);
      yPosition += 5;
    });
    yPosition += 5;
  });
  
  // Section 8: Future Vision & Disclaimer
  pdf.addPage();
  yPosition = margin;
  addSectionHeader('Future Vision & Disclaimer', 8);
  
  pdf.setFont('helvetica', 'bold');
  addText('Future Vision:', 12, 'bold', [147, 51, 234]);
  yPosition += 2;
  addText('CPM aims to become more than a token — it\'s a cultural protocol powered by people, humor, and code. Through partnerships with Web3 analytics firms, AI research labs, and major exchanges, CPM will evolve into the first decentralized Meme Intelligence Network — turning the voice of the internet into blockchain reality.', 11);
  yPosition += 10;
  
  pdf.setFont('helvetica', 'bold');
  addText('Disclaimer:', 12, 'bold', [220, 38, 38]);
  yPosition += 2;
  addText('Crypto Pump Meme (CPM) is a community-driven experimental project. Participation involves risk and should not be considered financial advice. Always DYOR (Do Your Own Research).', 11);
  
  // Footer on last page
  yPosition = pageHeight - 30;
  pdf.setDrawColor(147, 51, 234);
  pdf.line(margin, yPosition, pageWidth - margin, yPosition);
  yPosition += 8;
  
  pdf.setFontSize(10);
  pdf.setTextColor(100, 100, 100);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Website: cryptopumpmeme.io', pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 6;
  pdf.text('Think Smart. Pump Hard. Meme Forever.', pageWidth / 2, yPosition, { align: 'center' });
  
  // Save the PDF
  pdf.save('CPM-Whitepaper-v1.0.pdf');
};