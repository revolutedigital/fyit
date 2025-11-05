# ⚠️ AÇÃO NECESSÁRIA: Atualizar Número do WhatsApp

## Problema Crítico
Todas as páginas B2B estão usando um número de WhatsApp PLACEHOLDER que não existe:
`5511999999999`

## Impacto
- **20-30% de perda de leads**
- Clientes interessados não conseguem entrar em contato
- Formulários redirecionam para número inválido

## Páginas Afetadas
- academias.html
- clinicas.html
- coaches.html
- fisioterapeutas.html
- influenciadores.html
- nutricionistas.html
- personal-trainers.html
- preparadores-fisicos.html

## Como Corrigir

### Opção 1: Comando Rápido (Recomendado)
```bash
# Substitua XXXXXXXXXXX pelo número real (com DDI 55 + DDD + número)
# Exemplo: 5511987654321 para (11) 98765-4321

find . -name "*.html" -type f -exec sed -i '' 's/5511999999999/55XXXXXXXXXXX/g' {} +
```

### Opção 2: Manual
Edite cada arquivo e substitua `5511999999999` pelo número real.

## Formato do Número
- **DDI**: 55 (Brasil)
- **DDD**: 11, 21, etc. (2 dígitos)
- **Número**: 9 dígitos (celular com 9 na frente)

**Exemplo completo**: `5511987654321` para WhatsApp (11) 98765-4321

## Após Atualizar
Commite e faça push:
```bash
git add .
git commit -m "Update WhatsApp number to real business number"
git push
```

---
**⚠️ Este arquivo pode ser deletado após a correção**
