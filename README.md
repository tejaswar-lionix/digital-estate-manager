# Digital Estate Manager — Cross-Platform Vault + Legacy

Unified vault for passwords, accounts, files, crypto, subscriptions across Windows/macOS/Linux/iOS/Android/Web with estate planning.

## Architecture
- **Backend:** Python (vault crypto) + Django, PostgreSQL (sqlite fallback)
- **Frontend:** React 18 + Vite + React Native (mock)
- **15 Apps:** vault, discovery, connectors, estate, executor, sharing, subscriptions, crypto, audit, sync, identity, compliance, notifications, import_export, frontend

## Install
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
npm install
```

## Build
```bash
make build
docker build -t digital-estate .
npm run build
```

## Run
```bash
python manage.py migrate --run-syncdb
python manage.py runserver 0.0.0.0:8000
npm run dev
docker-compose up
```

## Tests
```bash
pytest -q
pytest --cov=apps --cov-report=xml
npm test
```

## Features
- **Vault** E2E AES-256, zero-knowledge, SQLCipher offline
- **Discovery** Gmail scan `welcome to`, OAuth inventory 100+ accounts
- **Estate** will `spouse->Drive Photos`, `executor->banking`, `delete X`, time-capsule, dead man's switch 30d
- **Executor** verify + legal hold + transfer/share/delete, audit for probate
- **Sharing** grant `read until 2026-12`, emergency 48h, QR WiFi
- **Subscriptions** radar `$19/mo Figma renews 2026-10-11`
- **Crypto** wallets, seed phrases, NFTs, domains
- **Compliance** GDPR/CCPA forgotten templates, SOC2 export

## License
Proprietary — All rights reserved.
