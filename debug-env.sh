#!/bin/bash

echo ""
echo "=== CHECKING .env.local FILE ==="
if [ -f .env.local ]; then
  echo "✅ .env.local exists"
  echo ""
  echo "Contents:"
  cat .env.local
  echo ""
  echo "Variables found:"
  grep "=" .env.local | cut -d'=' -f1
else
  echo "❌ .env.local does NOT exist"
fi
echo "================================"
echo ""

