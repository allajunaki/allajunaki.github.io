#!/bin/bash

# Launch script for abilashmohan.com local development

echo "Starting local development server for abilashmohan.com..."
echo "=================================================="

# Load RVM if available
if [[ -s "$HOME/.rvm/scripts/rvm" ]]; then
    echo "Loading RVM..."
    source "$HOME/.rvm/scripts/rvm"
    
    # Use Ruby 3.3.0
    rvm use 3.3.0 --default
fi

# Navigate to site directory
cd site

# Check Ruby version
echo "Checking Ruby version..."
ruby_version=$(ruby -v)
echo "Using: $ruby_version"

# Install bundler if needed
if ! command -v bundle &> /dev/null; then
    echo "Installing bundler..."
    gem install bundler
fi

# Install dependencies
echo "Installing dependencies..."
bundle install

# Start Jekyll development server
echo ""
echo "Starting Jekyll server..."
echo "Site will be available at http://localhost:4000"
echo "Press Ctrl+C to stop the server"
echo ""

bundle exec jekyll serve --livereload