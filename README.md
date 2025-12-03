# 🚀 AWARE Protocol - Complete Setup Guide

## 📚 CODING BASICS (With Analogies!)

### 🏠 **Your Project Structure**

Think of your project like a **restaurant**:

```
your-repository/
├── index.html          🍽️  Dining Room (Where customers see the menu)
├── backend.js          👨‍🍳  Kitchen (Where chefs cook the food)
├── package.json        📋  Shopping List (What ingredients you need)
├── .env                🔐  Safe (Secret recipes and passwords)
├── .gitignore          🚪  Bouncer (Keeps secrets out of public)
└── README.md           📖  Welcome Sign (Instructions)
```

-----

## 🎯 **STEP-BY-STEP SETUP**

### **Step 1: Download Node.js** (The Engine)

Node.js = The engine that runs your backend code

1. Go to: https://nodejs.org/
1. Download the **LTS version** (green button)
1. Install it (just click Next → Next → Install)
1. Verify by opening Terminal/Command Prompt:
   
   ```bash
   node --version
   # Should show: v20.x.x or similar
   ```

**Analogy:** Node.js is like electricity for your house. You need it to power everything.

-----

### **Step 2: Set Up Your GitHub Repository**

1. Go to your GitHub repo (you already have this!)
1. Click **“Add file”** → **“Create new file”**
1. Create these files one by one:

#### 📄 **File 1: `.gitignore`** (Copy the code I gave you above)

- This is your **bouncer** - keeps secrets safe
- Name it exactly: `.gitignore` (with the dot!)

#### 📄 **File 2: `package.json`** (Copy the shopping list code)

- This tells Node.js what tools to download
- Name it: `package.json`

#### 📄 **File 3: `backend.js`** (Copy the server code)

- This is your **secret kitchen**
- Name it: `backend.js`

#### 📄 **File 4: `.env`** (Copy the vault template)

- Your **secret safe** for API keys
- Name it: `.env` (with the dot!)
- ⚠️ **IMPORTANT:** Check that `.gitignore` blocks this file!

-----

### **Step 3: Get API Keys** (Your Secret Passwords)

#### 🔑 **Claude API Key** (FREE $5 credit!)

1. Go to: https://console.anthropic.com/
1. Sign up with your email
1. Go to **“API Keys”**
1. Click **“Create Key”**
1. Copy the key (starts with `sk-ant-...`)
1. Paste in `.env` file:
   
   ```
   CLAUDE_API_KEY=sk-ant-your-actual-key-here
   ```

#### 🔑 **OpenAI API Key** (Optional, for GPT-4)

1. Go to: https://platform.openai.com/api-keys
1. Sign up (requires payment info)
1. Create new key
1. Add to `.env`:
   
   ```
   OPENAI_API_KEY=sk-your-openai-key-here
   ```

-----

### **Step 4: Download Your Repository to Your Computer**

1. On your GitHub repo page, click the green **“Code”** button
1. Copy the HTTPS URL
1. Open Terminal/Command Prompt
1. Navigate to where you want the project:
   
   ```bash
   cd Desktop
   # Or wherever you want it
   ```
1. Clone the repo:
   
   ```bash
   git clone YOUR-REPO-URL
   cd your-repository-name
   ```

**Analogy:** This is like downloading a blueprint of your house so you can build it on your property.

-----

### **Step 5: Install Dependencies** (Download the Tools)

```bash
npm install
```

This downloads all the tools listed in `package.json`.

**Analogy:** Like going to the store and buying all the ingredients on your shopping list.

Takes 1-2 minutes. You’ll see a `node_modules` folder appear (that’s all your tools!).

-----

### **Step 6: Start Your Server** (Turn On the Engine)

```bash
npm start
```

You should see:

```
🚀 AWARE Protocol backend running on http://localhost:3000
📊 API available at http://localhost:3000/api
```

**Analogy:** This is like turning on your restaurant. The kitchen is now cooking!

-----

### **Step 7: Open Your Website**

1. Open your web browser
1. Go to: `http://localhost:3000`
1. You should see your AWARE Protocol scanner! 🎉

-----

## 🔄 **HOW IT ALL WORKS**

```
┌─────────────┐         ┌─────────────┐         ┌─────────────┐
│   USER      │────────▶│  FRONTEND   │────────▶│  BACKEND    │
│ (Browser)   │         │ (index.html)│         │ (backend.js)│
└─────────────┘         └─────────────┘         └─────────────┘
                                                       │
                                                       ▼
                                                 ┌─────────────┐
                                                 │   API KEYS  │
                                                 │   (.env)    │
                                                 └─────────────┘
                                                       │
                                                       ▼
                                                 ┌─────────────┐
                                                 │   CLAUDE    │
                                                 │   OpenAI    │
                                                 │   Pump.fun  │
                                                 └─────────────┘
```

**Simple Explanation:**

1. You type in the browser (order food)
1. Frontend shows you buttons/forms (waiter takes order)
1. Backend gets your request (chef cooks)
1. Backend uses API keys to call external services (buy ingredients)
1. Backend sends result back to frontend (serve food)
1. You see the result! (eat and enjoy)

-----

## 🛠️ **TROUBLESHOOTING**

### ❌ **“Command not found: npm”**

**Problem:** Node.js not installed  
**Solution:** Go back to Step 1, install Node.js

### ❌ **“Port 3000 already in use”**

**Problem:** Something else is using port 3000  
**Solution:**

```bash
# Use a different port
PORT=3001 npm start
```

### ❌ **“API key invalid”**

**Problem:** Wrong API key in `.env`  
**Solution:**

1. Check your `.env` file
1. Make sure key is correct (no extra spaces)
1. Restart the server (`npm start`)

### ❌ **“Cannot find module ‘express’”**

**Problem:** Dependencies not installed  
**Solution:**

```bash
npm install
```

-----

## 🎨 **CUSTOMIZATION IDEAS**

### Want to change colors?

Edit the CSS in `index.html` - look for color codes like `#14F195`

### Want to add more tokens?

Edit `generateMockTokens()` function in `index.html`

### Want to connect real Pump.fun data?

The backend already has the code! Just uncomment the API calls.

-----

## 🚀 **DEPLOYING TO THE INTERNET**

Once everything works locally, you can deploy to:

### **Option 1: Vercel** (Easiest)

1. Go to: https://vercel.com
1. Sign up with GitHub
1. Import your repository
1. Add your API keys in Vercel dashboard (Environment Variables)
1. Deploy! 🎉

### **Option 2: Heroku**

1. Go to: https://heroku.com
1. Create new app
1. Connect to GitHub
1. Add environment variables
1. Deploy!

### **Option 3: Render**

1. Go to: https://render.com
1. Similar process to Vercel

-----

## 🔐 **SECURITY CHECKLIST**

✅ `.env` file is in `.gitignore`  
✅ Never put API keys directly in `index.html`  
✅ Never commit `.env` to GitHub  
✅ Use environment variables on deployment platforms  
✅ Regenerate keys if accidentally exposed

-----

## 📞 **NEED HELP?**

- Node.js issues: https://nodejs.org/en/docs/
- Express.js guide: https://expressjs.com/
- Claude API docs: https://docs.anthropic.com/
- GitHub basics: https://docs.github.com/en/get-started

-----

## 🎓 **KEY CONCEPTS LEARNED**

1. **Frontend vs Backend**: Restaurant dining room vs kitchen
1. **API Keys**: Secret passwords that should never be public
1. **Environment Variables**: Safe way to store secrets
1. **Node.js**: JavaScript runtime (engine for backend)
1. **Express.js**: Framework to build web servers easily
1. **npm**: Package manager (downloads tools/libraries)
1. **GitHub**: Cloud storage for your code
1. **.gitignore**: Keeps secrets safe from public view

-----

## 🎉 **YOU DID IT!**

You now have:

- ✅ A working crypto scanner
- ✅ AI-powered analysis
- ✅ Secure API key management
- ✅ Understanding of frontend/backend
- ✅ A project you can expand and customize!

**Next steps:**

- Experiment with the code
- Add new features
- Connect to real pump.fun data
- Deploy to the internet
- Share with friends!

-----

Made with 💚 by the AWARE Protocol team