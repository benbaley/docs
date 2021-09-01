(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4419],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2259:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var n=a(2122),o=a(9756),r=(a(7294),a(3905)),l={id:"Command_Line_Tools",title:"Command line tools",sidebar_label:"Command line tools"},i=void 0,s={unversionedId:"Command_Line_Tools",id:"Command_Line_Tools",isDocsHomePage:!1,title:"Command line tools",description:"Introducing the program PlatON instructions",source:"@site/../docs/PlatON\u547d\u4ee4\u884c\u5de5\u5177.md",sourceDirName:".",slug:"/Command_Line_Tools",permalink:"/docs/Command_Line_Tools",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/docs/PlatON\u547d\u4ee4\u884c\u5de5\u5177.md",version:"current",frontMatter:{id:"Command_Line_Tools",title:"Command line tools",sidebar_label:"Command line tools"},sidebar:"docs",previous:{title:"MTool offline tutorial",permalink:"/docs/OffLine_MTool_Manual"},next:{title:"Development guide",permalink:"/docs/PlatON_Overview_DevGuide"}},c=[{value:"Introducing the program PlatON instructions",id:"introducing-the-program-platon-instructions",children:[]},{value:"Common rpc commands",id:"common-rpc-commands",children:[{value:"admin",id:"admin",children:[]},{value:"platon",id:"platon",children:[]},{value:"personal",id:"personal",children:[]},{value:"net",id:"net",children:[]},{value:"debug",id:"debug",children:[]}]}],p={toc:c};function m(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introducing-the-program-platon-instructions"},"Introducing the program PlatON instructions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},'NAME:\n   platon.exe - the go-platon command line interface\n\n   Copyright 2013-2018 The PlatON-Go Authors\n\nUSAGE:\n   platon.exe [options] command [command options] [arguments...]\n\nVERSION:\n   1.8.16-stable-401329c1\n\nCOMMANDS:\n   account           Manage accounts\n   attach            Start an interactive JavaScript environment (connect to node)\n   bug               opens a window to report a bug on the platon repo\n   console           Start an interactive JavaScript environment\n   copydb            Create a local chain from a target chaindata folder\n   dump              Dump a specific block from storage\n   dumpconfig        Show configuration values\n   export            Export blockchain into file\n   export-preimages  Export the preimage database into an RLP stream\n   import            Import a blockchain file\n   import-preimages  Import the preimage database from an RLP stream\n   init              Bootstrap and initialize a new genesis block\n   js                Execute the specified JavaScript files\n   license           Display license information\n   makecache         Generate ethash verification cache (for testing)\n   makedag           Generate ethash mining DAG (for testing)\n   monitor           Monitor and visualize node metrics\n   removedb          Remove blockchain and state databases\n   version           Print version numbers\n   wallet            Manage Ethereum presale wallets\n   help, h           Shows a list of commands or help for one command\n\nETHEREUM OPTIONS:\n  --config value                                        TOML configuration file\n  --datadir "C:\\Users\\jungle\\AppData\\Roaming\\Ethereum"  Data directory for the databases and keystore\n  --keystore                                            Directory for the keystore (default = inside the datadir)\n  --nousb                                               Disables monitoring for and managing USB hardware wallets\n  --networkid value                                     Network identifier (integer, 1=Frontier, 2=Morden (disused), 3=Ropsten, 4=Rinkeby) (default: 1)\n  --testnet                                             Ropsten network: pre-configured proof-of-work test network\n  --rinkeby                                             Rinkeby network: pre-configured proof-of-authority test network\n  --syncmode "full"                                     Blockchain sync mode ("fast", "full", or "light")\n  --gcmode value                                        Blockchain garbage collection mode ("full", "archive") (default: "full")\n  --ethstats value                                      Reporting URL of a ethstats service (nodename:secret@host:port)\n  --identity value                                      Custom node name\n  --lightserv value                                     Maximum percentage of time allowed for serving LES requests (0-90) (default: 0)\n  --lightpeers value                                    Maximum number of LES client peers (default: 100)\n  --lightkdf                                            Reduce key-derivation RAM & CPU usage at some expense of KDF strength\n\nDEVELOPER CHAIN OPTIONS:\n  --dev               Ephemeral proof-of-authority network with a pre-funded developer account, mining enabled\n  --dev.period value  Block period to use in developer mode (0 = mine only if transaction pending) (default: 0)\n\nETHASH OPTIONS:\n  --ethash.cachedir                                 Directory to store the ethash verification caches (default = inside the datadir)\n  --ethash.cachesinmem value                        Number of recent ethash caches to keep in memory (16MB each) (default: 2)\n  --ethash.cachesondisk value                       Number of recent ethash caches to keep on disk (16MB each) (default: 3)\n  --ethash.dagdir "C:\\Users\\jungle\\AppData\\Ethash"  Directory to store the ethash mining DAGs (default = inside home folder)\n  --ethash.dagsinmem value                          Number of recent ethash mining DAGs to keep in memory (1+GB each) (default: 1)\n  --ethash.dagsondisk value                         Number of recent ethash mining DAGs to keep on disk (1+GB each) (default: 2)\n\nTRANSACTION POOL OPTIONS:\n  --txpool.locals value         Comma separated accounts to treat as locals (no flush, priority inclusion)\n  --txpool.nolocals             Disables price exemptions for locally submitted transactions\n  --txpool.journal value        Disk journal for local transaction to survive node restarts (default: "transactions.rlp")\n  --txpool.rejournal value      Time interval to regenerate the local transaction journal (default: 1h0m0s)\n  --txpool.pricelimit value     Minimum gas price limit to enforce for acceptance into the pool (default: 1)\n  --txpool.pricebump value      Price bump percentage to replace an already existing transaction (default: 10)\n  --txpool.accountslots value   Minimum number of executable transaction slots guaranteed per account (default: 16)\n  --txpool.globalslots value    Maximum number of executable transaction slots for all accounts (default: 4096)\n  --txpool.accountqueue value   Maximum number of non-executable transaction slots permitted per account (default: 64)\n  --txpool.globalqueue value    Maximum number of non-executable transaction slots for all accounts (default: 1024)\n  --txpool.globaltxcount value  Maximum number of transactions for package (default: 3000)\n  --txpool.lifetime value       Maximum amount of time non-executable transaction are queued (default: 3h0m0s)\n\nPERFORMANCE TUNING OPTIONS:\n  --cache value            Megabytes of memory allocated to internal caching (default: 1024)\n  --cache.database value   Percentage of cache memory allowance to use for database io (default: 75)\n  --cache.gc value         Percentage of cache memory allowance to use for trie pruning (default: 25)\n  --trie-cache-gens value  Number of trie node generations to keep in memory (default: 120)\n\nACCOUNT OPTIONS:\n  --unlock value    Comma separated list of accounts to unlock\n  --password value  Password file to use for non-interactive password input\n\nAPI AND CONSOLE OPTIONS:\n  --rpc                  Enable the HTTP-RPC server\n  --rpcaddr value        HTTP-RPC server listening interface (default: "localhost")\n  --rpcport value        HTTP-RPC server listening port (default: 6789)\n  --rpcapi value         API\'s offered over the HTTP-RPC interface\n  --ws                   Enable the WS-RPC server\n  --wsaddr value         WS-RPC server listening interface (default: "localhost")\n  --wsport value         WS-RPC server listening port (default: 6790)\n  --wsapi value          API\'s offered over the WS-RPC interface\n  --wsorigins value      Origins from which to accept websockets requests\n  --ipcdisable           Disable the IPC-RPC server\n  --ipcpath              Filename for IPC socket/pipe within the datadir (explicit paths escape it)\n  --rpccorsdomain value  Comma separated list of domains from which to accept cross origin requests (browser enforced)\n  --rpcvhosts value      Comma separated list of virtual hostnames from which to accept requests (server enforced). Accepts \'*\' wildcard. (default: "localhost")\n  --jspath loadScript    JavaScript root path for loadScript (default: ".")\n  --exec value           Execute JavaScript statement\n  --preload value        Comma separated list of JavaScript files to preload into the console\n\nNETWORKING OPTIONS:\n  --bootnodes value     Comma separated enode URLs for P2P discovery bootstrap (set v4+v5 instead for light servers)\n  --bootnodesv4 value   Comma separated enode URLs for P2P v4 discovery bootstrap (light server, full nodes)\n  --bootnodesv5 value   Comma separated enode URLs for P2P v5 discovery bootstrap (light server, light nodes)\n  --port value          Network listening port (default: 16789)\n  --maxpeers value      Maximum number of network peers (network disabled if set to 0) (default: 25)\n  --maxpendpeers value  Maximum number of pending connection attempts (defaults used if set to 0) (default: 0)\n  --nat value           NAT port mapping mechanism (any|none|upnp|pmp|extip:<IP>) (default: "any")\n  --nodiscover          Disables the peer discovery mechanism (manual peer addition)\n  --v5disc              Enables the experimental RLPx V5 (Topic Discovery) mechanism\n  --netrestrict value   Restricts network communication to the given IP networks (CIDR masks)\n  --nodekey value       P2P node key file\n  --nodekeyhex value    P2P node key as hex (for testing)\n\nMINER OPTIONS:\n  --mine                         Enable mining\n  --miner.threads value          Number of CPU threads to use for mining (default: 0)\n  --miner.notify value           Comma separated HTTP URL list to notify of new work packages\n  --miner.gasprice "1000000000"  Minimum gas price for mining a transaction\n  --miner.gastarget value        Target gas floor for mined blocks (default: 3150000000)\n  --miner.gaslimit value         Target gas ceiling for mined blocks (default: 3150000000)\n  --miner.etherbase value        Public address for block mining rewards (default = first account) (default: "0")\n  --miner.extradata value        Block extra data set by the miner (default = client version)\n  --miner.recommit value         Time interval to recreate the block being mined (default: 3s)\n  --miner.noverify               Disable remote sealing verification\n\nGAS PRICE ORACLE OPTIONS:\n  --gpoblocks value      Number of recent blocks to check for gas prices (default: 20)\n  --gpopercentile value  Suggested gas price is the given percentile of a set of recent transaction gas prices (default: 60)\n\nVIRTUAL MACHINE OPTIONS:\n  --vmdebug         Record information useful for VM and contract debugging\n  --vm.evm value    External EVM configuration (default = built-in interpreter)\n  --vm.ewasm value  External ewasm configuration (default = built-in interpreter)\n\nLOGGING AND DEBUGGING OPTIONS:\n  --fakepow                 Disables proof-of-work verification\n  --nocompaction            Disables db compaction after import\n  --verbosity value         Logging verbosity: 0=silent, 1=error, 2=warn, 3=info, 4=debug, 5=detail (default: 3)\n  --vmodule value           Per-module verbosity: comma-separated list of <pattern>=<level> (e.g. eth/*=5,p2p=4)\n  --backtrace value         Request a stack trace at a specific logging statement (e.g. "block.go:271")\n  --debug                   Prepends log messages with call-site location (file and line number)\n  --pprof                   Enable the pprof HTTP server\n  --pprofaddr value         pprof HTTP server listening interface (default: "127.0.0.1")\n  --pprofport value         pprof HTTP server listening port (default: 6060)\n  --memprofilerate value    Turn on memory profiling with the given rate (default: 524288)\n  --blockprofilerate value  Turn on block profiling with the given rate (default: 0)\n  --cpuprofile value        Write CPU profile to the given file\n  --trace value             Write execution trace to the given file\n  --wasmlog value           output wasm contract log to file\n\nMETRICS AND STATS OPTIONS:\n  --metrics                          Enable metrics collection and reporting\n  --metrics.influxdb                 Enable metrics export/push to an external InfluxDB database\n  --metrics.influxdb.endpoint value  InfluxDB API endpoint to report metrics to (default: "http://localhost:8086")\n  --metrics.influxdb.database value  InfluxDB database name to push reported metrics to (default: "platon")\n  --metrics.influxdb.username value  Username to authorize access to the database (default: "test")\n  --metrics.influxdb.password value  Password to authorize access to the database (default: "test")\n  --metrics.influxdb.host.tag host   InfluxDB host tag attached to all measurements (default: "localhost")\n\nWHISPER (EXPERIMENTAL) OPTIONS:\n  --shh                       Enable Whisper\n  --shh.maxmessagesize value  Max message size accepted (default: 1048576)\n  --shh.pow value             Minimum POW accepted (default: 0.2)\n  --shh.restrict-light        Restrict connection between two whisper light clients\n\nDEPRECATED OPTIONS:\n  --minerthreads value     Number of CPU threads to use for mining (deprecated, use --miner.threads) (default: 0)\n  --targetgaslimit value   Target gas floor for mined blocks (deprecated, use --miner.gastarget) (default: 3150000000)\n  --gasprice "1000000000"  Minimum gas price for mining a transaction (deprecated, use --miner.gasprice)\n  --etherbase value        Public address for block mining rewards (default = first account, deprecated, use --miner.etherbase) (default: "0")\n  --extradata value        Block extra data set by the miner (default = client version, deprecated, use --miner.extradata)\n\nMPC COMPUTE OPTIONS:\n  --mpc              Enable mpc compute\n  --mpc.actor value  The address of actor to exec mpc compute\n  --mpc.ice value    Filename for ice to init mvm\n\nMISC OPTIONS:6\n  --help, -h  show help\n\n\nCOPYRIGHT:\n   Copyright 2013-2018 The PlatON-Go Authors\n')),(0,r.kt)("h2",{id:"common-rpc-commands"},"Common rpc commands"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Description",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The rpc port is changed according to the actual startup command and the default is 6789")))),(0,r.kt)("h3",{id:"admin"},"admin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"View the data directory of the current node"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec admin.datadir\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"View the ChainID of the current node"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec admin.nodeInfo.protocols.platon.config.chainId\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"View the id of the current node"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec admin.nodeInfo.id\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"View the blsPubKey of the current node"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec admin.nodeInfo.blsPubKey\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"View the p2p port number of the current node"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"platon attach http://localhost:6789 -exec admin.nodeInfo.ports.listener\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"View the connection information of peers of the current node"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec admin.peers\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"View the genesis block hash of the current node"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec admin.nodeInfo.protocols.platon.genesis\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"View the maximum number of blocks ($amount) of a single node in each consensus round of cbft consensus"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec admin.nodeInfo.protocols.platon.config.cbft.amount\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"View the time window of block generation by a single node in each consensus round of cbft consensus ($period, unit: ms)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec admin.nodeInfo.protocols.platon.config.cbft.period\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Blocking time interval = period / 1000 / amount")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Get the binary version number and signature information"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'admin.getProgramVersion()'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Obtain zero- knowledge proof information (use the node's private key to prove whether the certificate issued by the interface is correct and used for node pledge)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'admin.getSchnorrNIZKProve()'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"View the type of virtual machine used at the bottom (EVM / WASM)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec admin.nodeInfo.protocols.platon.config.interpreter\n")))),(0,r.kt)("h3",{id:"platon"},"platon"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"View all wallet addresses under the current node"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec platon.accounts\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"View the block height of the current node"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec platon.blockNumber\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check the balance of the specified account ($account is the account address)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'platon.getBalance(\"$account\")'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Query the number of transactions in the specified block ($blockNumber is the block height or block hash of the specified block)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'platon.getBlockTransactionCount($blockNumber)'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Query transaction information ($txHash is transaction hash)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'platon.getTransaction(\"$txHash\")'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Query transaction receipt ($txHash is transaction hash)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'platon.getTransactionReceipt(\"$txHash\")'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Query the number of transactions in the specified account (parameter $address is the account address, used to specify the nonce of the transaction when sending the transaction)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'platon.getTransactionCount(\"$address\")'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Query the pending transaction of the current node"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec platon.pendingTransactions\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"View the default gasPrice of the current node (unit: von)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec platon.gasPrice\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Estimate the gas of the transaction (parameter $transaction is the transaction details, unit: von)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'platon.estimateGas($transaction)'\n")),(0,r.kt)("p",{parentName:"li"},"For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'platon attach http://localhost:6789 -exec \'platon.estimateGas({from:"lax1fyeszufxwxk62p46djncj86rd553skpptsj8v6",to:"lax1zhllhqu72wz66cdwly8983xhla2sann75j2ec2",value:"0x10000000000000",data:"0x11",gas:"0x88888",gasprice:"0x333333",nonce:"11"})\'\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"View the p2p protocol number of the underlying version of the current node"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'web3.toDecimal(platon.protocolVersion)'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"See if the current node is in sync"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec platon.syncing\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Get details of specified block"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'platon.getBlock($blockNumber)'\n")))),(0,r.kt)("h3",{id:"personal"},"personal"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Generate wallet (parameter is wallet password)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'personal.newAccount(\"88888888\")'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Import private key to generate wallet"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'personal.importRawKey($privateKey, $password)'\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Parameters:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"privateKey: private key, remove the leading 0x"),(0,r.kt)("li",{parentName:"ul"},"password: wallet password")),(0,r.kt)("p",{parentName:"blockquote"},"Back to:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Wallet address"))),(0,r.kt)("p",{parentName:"li"},"For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'platon attach http://localhost:6789 -exec \'personal.importRawKey ("842d943dbb50a8d3fe63af2f82fda3d8f0ca817fe8d47e61698142bac7c24212", "88888888")\'\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"View account address"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'personal.listAccounts'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"View local wallet information, including wallet address, wallet file path and wallet status"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'personal.listWallets'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Lock account"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'personal.lockAccount(platon.accounts[0])'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Unlock account"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'personal.unlockAccount(platon.accounts[0], \"88888888\", 24*3600)'\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Parameters:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Account address"),(0,r.kt)("li",{parentName:"ul"},"Wallet password"),(0,r.kt)("li",{parentName:"ul"},"Unlock time in seconds")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Send unsigned transactions"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'platon attach http://localhost:6789 -exec \'personal.sendTransaction({from: platon.accounts[2], to: platon.accounts[0], value:web3.toVon("0.1","lat"), nonce: platon.getTransactionCount(platon.accounts[2])}, "88888888") \'\n')))),(0,r.kt)("h3",{id:"net"},"net"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"View the networkid of the current node"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec net.version\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check whether the p2p port of the current node is in the listening state"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec net.listening\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"View the number of peer connections of the current node"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec net.peerCount\n")))),(0,r.kt)("h3",{id:"debug"},"debug"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Query the economic model configuration parameters of the current node"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'debug.economicConfig()'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set log level"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"platon attach http://localhost:6789 -exec 'debug.verbosity(4)'\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Log level description:"),(0,r.kt)("p",{parentName:"blockquote"},"0: CRIT"),(0,r.kt)("p",{parentName:"blockquote"},"1: ERROR"),(0,r.kt)("p",{parentName:"blockquote"},"2: WARN"),(0,r.kt)("p",{parentName:"blockquote"},"3: INFO"),(0,r.kt)("p",{parentName:"blockquote"},"4: DEBUG"),(0,r.kt)("p",{parentName:"blockquote"},"5: TRACE")))))}m.isMDXComponent=!0}}]);