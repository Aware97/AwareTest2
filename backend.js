// ==================== BACKEND SERVER ====================
// This file runs on a server (not in the browser)
// Think of this as your secret kitchen where you cook the data

const express = require(‘express’);
const cors = require(‘cors’);
const fetch = require(‘node-fetch’);
require(‘dotenv’).config(); // Loads secrets from .env file

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Allows frontend to talk to backend
app.use(express.json()); // Understands JSON data

// ==================== SERVE FRONTEND ====================
app.use(express.static(’.’)); // Serves your index.html

// ==================== API ENDPOINTS ====================

// 🤖 AI Chat Endpoint
app.post(’/api/chat’, async (req, res) => {
try {
const { message } = req.body;

```
    // Call Claude API (your key is safe here on the server!)
    const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.CLAUDE_API_KEY, // Secret!
            'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 1000,
            messages: [{
                role: 'user',
                content: `You are an AI crypto analyst. Answer this question about crypto/tokens concisely: ${message}`
            }]
        })
    });

    const data = await response.json();
    const aiResponse = data.content[0].text;
    
    res.json({ response: aiResponse });
    
} catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'AI response failed' });
}
```

});

// 📊 Token Analysis Endpoint
app.post(’/api/analyze’, async (req, res) => {
try {
const { name, symbol, marketCap, holders } = req.body;

```
    // Call Claude to analyze the token
    const prompt = `Analyze this crypto token and give a rating (green/yellow/red) and score (0-10):
    Name: ${name}
    Symbol: ${symbol}
    Market Cap: $${marketCap}
    Holders: ${holders}
    
    Respond with JSON only: {"rating": "green", "score": 8.5, "reasoning": "..."}`;
    
    const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.CLAUDE_API_KEY,
            'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 500,
            messages: [{ role: 'user', content: prompt }]
        })
    });

    const data = await response.json();
    const analysis = JSON.parse(data.content[0].text);
    
    res.json({
        aiRating: analysis.rating,
        claudeScore: analysis.score,
        gptScore: analysis.score * 0.95, // Mock for now
        grokScore: analysis.score * 1.05, // Mock for now
        reasoning: analysis.reasoning
    });
    
} catch (error) {
    console.error('Analysis error:', error);
    res.status(500).json({ error: 'Analysis failed' });
}
```

});

// 🚀 Pump.fun Scanner Endpoint
app.get(’/api/scan’, async (req, res) => {
try {
// Fetch tokens from Pump.fun
const response = await fetch(‘https://frontend-api.pump.fun/coins?limit=20&sort=last_trade_timestamp&order=DESC’);
const tokens = await response.json();

```
    // Analyze each token (in parallel for speed)
    const analyzed = await Promise.all(
        tokens.slice(0, 10).map(async (token) => {
            try {
                const analysis = await analyzeToken(token);
                return {
                    ...token,
                    ...analysis
                };
            } catch (err) {
                console.error('Token analysis failed:', err);
                return null;
            }
        })
    );
    
    const validTokens = analyzed.filter(t => t !== null);
    res.json(validTokens);
    
} catch (error) {
    console.error('Scan error:', error);
    res.status(500).json({ error: 'Scan failed' });
}
```

});

// Helper function to analyze a single token
async function analyzeToken(token) {
// For now, return mock analysis
// In production, call Claude API here
return {
aiRating: [‘green’, ‘yellow’, ‘red’][Math.floor(Math.random() * 3)],
claudeScore: Math.random() * 4 + 6,
gptScore: Math.random() * 4 + 6,
grokScore: Math.random() * 4 + 6
};
}

// ==================== START SERVER ====================
app.listen(PORT, () => {
console.log(`🚀 AWARE Protocol backend running on http://localhost:${PORT}`);
console.log(`📊 API available at http://localhost:${PORT}/api`);
});