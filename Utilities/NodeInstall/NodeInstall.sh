#! /bin/bash

sudo apt-get install curl

# Optionally uncomment the canonical setup script for Node.js v0.10
# If you do this, then comment out the v0.12 script below
# Details are here: https://nodesource.com/blog/nodejs-v012-iojs-and-the-nodesource-linux-repositories
# Also see: https://github.com/nodesource/distributions

# The setup script name for Node.js v0.10
# curl -sL https://deb.nodesource.com/setup | sudo bash -

# The new setup script name for Node.js v0.12
# curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -

# The new setup script for Node.js v4.X
# curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -

# The new setup script for Node.js v5.X
# curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -

# The new setup script for Node.js v6.X
# curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

# The new setup script for Node.js v7.X
# curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -

# The new setup script for Node.js v8.X
# curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

# The new setup script for Node.js v9.X
# curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -

# The new setup script for Node.js v10.X
# curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

# The new setup script for Node.js v11.X
# curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -

# The new setup script for Node.js v12.X
# curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

# The new setup script for Node.js v13.X
# curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -

# The new setup script for Node.js v14.X
# curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -

# The new setup script for Node.js v15.X
# curl -sL https://deb.nodesource.com/setup_15.x | sudo -E bash -

# The new setup script for Node.js v16.X
# curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -

# The new setup script for Node.js v17.X
curl -sL https://deb.nodesource.com/setup_17.x | sudo -E bash -

# Install node
sudo apt-get install -y nodejs

echo Add to .bashrc
echo export NODE_PATH=$NODE_PATH:$HOME/npm/lib/node_modules
#  echo "export NODE_PATH=$NODE_PATH:$HOME/npm/lib/node_modules" >> ~/.bashrc && source ~/.bashrc

