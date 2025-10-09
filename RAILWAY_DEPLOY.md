# 🚂 Deploy Automático no Railway

## ✅ Configuração Completa

O projeto está configurado para deploy automático no Railway. Cada push para `main` irá fazer:

1. ✅ Instalar dependências (`npm ci`)
2. ✅ Compilar CSS do Tailwind (`npm run build:css`)
3. ✅ Servir site estático com `serve`

---

## 📋 Instruções de Deploy

### **Opção 1: Deploy Automático (Recomendado)**

1. **Conectar repositório ao Railway:**
   - Acesse [railway.app](https://railway.app)
   - Click em "New Project" → "Deploy from GitHub repo"
   - Selecione `revolutedigital/fyit`
   - Railway detectará automaticamente as configurações

2. **Configurar domínio:**
   - No Railway dashboard, vá em "Settings" → "Domains"
   - Adicione seu domínio customizado: `fyit.com.br`
   - Configure DNS:
     ```
     Type: CNAME
     Name: @
     Value: [seu-projeto].up.railway.app
     ```

3. **Pronto!** 🎉
   - Cada push para `main` fará deploy automático
   - Build time: ~2-3 minutos
   - Zero downtime

---

### **Opção 2: Deploy Manual via CLI**

```bash
# Instalar Railway CLI
npm i -g @railway/cli

# Login
railway login

# Linkar ao projeto
railway link

# Deploy
railway up
```

---

## 🔧 Arquivos de Configuração

### `railway.json`
Define comandos de build e deploy

### `nixpacks.toml`
Configuração do Nixpacks (builder do Railway)

### `serve.json`
Configuração do servidor estático (cache, redirects)

### `package.json`
- `npm run build:css` - Compila Tailwind CSS
- `npm start` - Inicia servidor de produção

---

## ⚙️ Variáveis de Ambiente

O Railway detecta automaticamente:
- `PORT` - Porta do servidor (setada automaticamente)
- `NODE_ENV=production` - Ambiente de produção

---

## 📊 Monitoramento

Após deploy, você pode:

1. **Ver logs em tempo real:**
   ```bash
   railway logs
   ```

2. **Ver métricas:**
   - Dashboard do Railway mostra CPU, memória, bandwidth

3. **Rollback se necessário:**
   ```bash
   railway rollback
   ```

---

## 🚀 Performance Esperada

Após as otimizações de SEO:

- **CSS:** 29KB (compilado, minificado)
- **Build time:** ~2min
- **Cold start:** < 1s
- **Response time:** < 100ms
- **Core Web Vitals:** 90+ (verde)

---

## 🔄 Pipeline Completo

```
Push to GitHub (main)
    ↓
Railway detecta commit
    ↓
Build: npm ci
    ↓
Build: npm run build:css (29KB CSS)
    ↓
Start: npm start (serve static)
    ↓
Deploy: fyit.com.br
    ↓
Health check OK
    ↓
Live! 🎉
```

---

## 📝 Notas Importantes

- ✅ **CSS sempre compilado** - Nunca usa CDN em produção
- ✅ **Cache otimizado** - HTML 5min, CSS/JS/Images 1 ano
- ✅ **HTTPS automático** - Railway configura SSL
- ✅ **Zero config** - Funciona out-of-the-box

---

## 🐛 Troubleshooting

### Build falha?
```bash
# Limpar cache
railway run npm cache clean --force

# Rebuild
railway up --detach
```

### Site não atualiza?
- Railway faz cache agressivo
- Force refresh: Ctrl+Shift+R (Chrome)
- Ou espere 5min (cache HTML expira)

### CSS não carrega?
- Verifique se `/dist/output.css` existe após build
- Logs: `railway logs | grep "build:css"`

---

## 📞 Suporte

- Railway Docs: https://docs.railway.app
- Railway Discord: https://discord.gg/railway
- Status: https://status.railway.app

---

**Deploy configurado em:** 2025-10-09
**Última atualização:** Otimizações SEO Enterprise (Nota 9.2/10)
