'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"alshueiliproject.github.io/.git/COMMIT_EDITMSG": "b5a3bfe6c41cb991353c601b02cc114b",
"alshueiliproject.github.io/.git/config": "c32cce8548cac61eab5ed9701214e556",
"alshueiliproject.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"alshueiliproject.github.io/.git/FETCH_HEAD": "d600bc15633398dc6b46a705b1537495",
"alshueiliproject.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"alshueiliproject.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"alshueiliproject.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"alshueiliproject.github.io/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"alshueiliproject.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"alshueiliproject.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"alshueiliproject.github.io/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"alshueiliproject.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"alshueiliproject.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"alshueiliproject.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"alshueiliproject.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"alshueiliproject.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"alshueiliproject.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"alshueiliproject.github.io/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"alshueiliproject.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"alshueiliproject.github.io/.git/index": "0cb4963cdfecab04c84b254e96917ded",
"alshueiliproject.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"alshueiliproject.github.io/.git/logs/HEAD": "3c6e7638de71b56f64c88f682289b3f4",
"alshueiliproject.github.io/.git/logs/refs/heads/main": "3c6e7638de71b56f64c88f682289b3f4",
"alshueiliproject.github.io/.git/logs/refs/remotes/origin/HEAD": "a6b5d23b25ae1143a12b39fd89829334",
"alshueiliproject.github.io/.git/logs/refs/remotes/origin/main": "8a6f4b0b56d3f3265323078505cf680c",
"alshueiliproject.github.io/.git/objects/01/6068b486e1bd1d73743185c2752b7b1b843701": "a0a9d817d83e2d0bd7150ec8e31ae55e",
"alshueiliproject.github.io/.git/objects/02/8c630d641011d3510691dea4793aa425e3c033": "9cc6800e9a3a8b871a97ce7c48097610",
"alshueiliproject.github.io/.git/objects/03/ca79ea81434a4c4c15991195e03f36ed1653eb": "a67d59c2447117eafb8c01d98979483e",
"alshueiliproject.github.io/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"alshueiliproject.github.io/.git/objects/05/34b7b1406de4372975be02d6e2539bcbe65bf3": "1544c369871beca1d8cc496011aab4d1",
"alshueiliproject.github.io/.git/objects/08/1ac580c33eda6156085946baee076e1f80f343": "4d4a1b3b386e323fce1182e5f201e555",
"alshueiliproject.github.io/.git/objects/09/2f2ee148aedb88d786662b7e09a4cb130e74f7": "218386e023af8066af7260f50e0dd191",
"alshueiliproject.github.io/.git/objects/0a/1d93d49461b6bb8299654b87b35bd2567bf59b": "7c7c493de4c998f2dd13a9b96f36fbc9",
"alshueiliproject.github.io/.git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
"alshueiliproject.github.io/.git/objects/0c/789fe61f20e0d058515e3ec5c373fe021f33bb": "69e3667b895a828d75e3785224769979",
"alshueiliproject.github.io/.git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
"alshueiliproject.github.io/.git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
"alshueiliproject.github.io/.git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
"alshueiliproject.github.io/.git/objects/19/62b1864304781d2668e110dd9953417756eabb": "dcb0f8a2a76ac047882228280ac54a8c",
"alshueiliproject.github.io/.git/objects/19/c084764cd739c74e9900edd47aac7e5ab878ff": "1833fcaf46541f022d7f171c337eba55",
"alshueiliproject.github.io/.git/objects/1a/abe85a3d706d7a4931b42ccf528b00ed392541": "e206fd016a14b8c30bf486d830640df2",
"alshueiliproject.github.io/.git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
"alshueiliproject.github.io/.git/objects/1c/935bdd1e4944418211499becf65eb3c185170f": "6f400b0df259ca5016dc52ec8e2d318b",
"alshueiliproject.github.io/.git/objects/1c/b681a34e6a3027a7599a72c478ef635ae9c6f2": "1d03ef3a84b07c46434679046536a101",
"alshueiliproject.github.io/.git/objects/1d/50cecf8179cfe7820dff7cde8f3573feeb3058": "da2f1e9783d14105ad3cffb9392ac0e1",
"alshueiliproject.github.io/.git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
"alshueiliproject.github.io/.git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
"alshueiliproject.github.io/.git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
"alshueiliproject.github.io/.git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
"alshueiliproject.github.io/.git/objects/23/1f59e77d6b16dfba0077a0f737b26c2f343243": "b39453214ad95d39c6e6c4ddfdca2668",
"alshueiliproject.github.io/.git/objects/24/a655d3bea82e9ade3e119534d6e8e2e19f8125": "dfd94b6325c3e29b6ab24e815f99c399",
"alshueiliproject.github.io/.git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
"alshueiliproject.github.io/.git/objects/28/4fbf61313bfa823fd2c29e71c3e20bf3f17d64": "e04c319cbace07c68ec545c14ffd6a15",
"alshueiliproject.github.io/.git/objects/29/1851e0e890c14925cefe45c9b4b45e92fd72de": "f49376f0ae55c5f803fae363c3ec6f13",
"alshueiliproject.github.io/.git/objects/29/619e6393b9019a621a524437170e8408e5a38b": "93cfb751adb780747536bec57cbab430",
"alshueiliproject.github.io/.git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
"alshueiliproject.github.io/.git/objects/2c/a33d5fbc7c5de59801a2e25d112d73ca9375aa": "bf6181197c3888e02806fc88931cbd1c",
"alshueiliproject.github.io/.git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
"alshueiliproject.github.io/.git/objects/32/47acac86f68d1485c7509ef9f4d201f6727660": "e5433593c0819599102c0b448dc8cda1",
"alshueiliproject.github.io/.git/objects/35/5fa2a82986c5fcff661a52947f8b15a74c4f6a": "e75b61d0dbaeb1550f6e370fd8d668cf",
"alshueiliproject.github.io/.git/objects/3a/4905e2e7e49203786ba25d49f12605d2e98e11": "d5c36e57c84ff4bbd693ecf2a70c9a07",
"alshueiliproject.github.io/.git/objects/3c/83486c6f4a755f1a0622b38999aa6847dca07b": "bbdaf3334c2c4d18b8553b23e39017e8",
"alshueiliproject.github.io/.git/objects/3c/dbb6cf7776836a4aac34e2e7f7fcff84804ea5": "60d7af48dca4e5a8ec6d97aa19572c2a",
"alshueiliproject.github.io/.git/objects/3e/a78fe80ef43299ece36e8e265e8b1b51691249": "3dcb12bc0fc26bf5b4c25302caf06aab",
"alshueiliproject.github.io/.git/objects/3f/44e4070e13a22f8492cab626ad0048de410e13": "3068f482674886610a5869909bf43299",
"alshueiliproject.github.io/.git/objects/42/6ccfccd7d49eab3a0963320893fa5c4f829a57": "0bec16f586d0dfecb07e9083dac84af0",
"alshueiliproject.github.io/.git/objects/45/93a47e22d4b23c35e18ff5acf9d60fbd40163f": "df07ad3a946aed8a43d487e3e40407f1",
"alshueiliproject.github.io/.git/objects/45/9b07e8b08de3eb4bd26fc9529d468c1c488d5b": "0d66301a20b6a23a53cb38584831c409",
"alshueiliproject.github.io/.git/objects/45/fd086abd739f7fc63b8be16542d439b1963a5f": "9824a23b472479bc81e913aeb2ca85c3",
"alshueiliproject.github.io/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"alshueiliproject.github.io/.git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
"alshueiliproject.github.io/.git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
"alshueiliproject.github.io/.git/objects/4a/f38effeb7ef6c85661f77717799e121a2d8a71": "18885840f99d6fcee9d60ce42d933b43",
"alshueiliproject.github.io/.git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
"alshueiliproject.github.io/.git/objects/4d/28c1a5423fe748158606f61787f0e2f7613b47": "def1558788fa9a6caea4a5d0f96844f2",
"alshueiliproject.github.io/.git/objects/4e/3a571093bb7ed4b88d7995730499e216bd4f38": "ea583af5f784f7e538120e55182a1637",
"alshueiliproject.github.io/.git/objects/51/0e29a22708b2df3aae8dec9ecfa88751e6cc32": "e70823c0f2c49a03026263a44cc75b8e",
"alshueiliproject.github.io/.git/objects/51/348b0a79f4b655a3fd6e8b2d9e542413253e3c": "a9a0061f6db9f0538af9d548a14b73dc",
"alshueiliproject.github.io/.git/objects/54/ed4fcc654506fd747b7c992ca26c6d1305738d": "d22112d8a2205e2cb4dfe750c31ce5e1",
"alshueiliproject.github.io/.git/objects/55/dc20346a960636b7d1562b8ec5ec506c7acb98": "a693fd9b9b98ef9e8ef64e8997ab60f6",
"alshueiliproject.github.io/.git/objects/55/e5d5c86c0bdcf582cfeb0a7b765341fd2b4230": "2006f033f3e04e18f6292bac28818bc9",
"alshueiliproject.github.io/.git/objects/56/59745435c9e1d303af5c721af66b5bdd598906": "2df046feb14ac0ab9e50ca6db1456d63",
"alshueiliproject.github.io/.git/objects/56/d7eced3d67fef7291a2314d31505fd912c6b2d": "a4e8a55072a1d988b3efd358070bf09c",
"alshueiliproject.github.io/.git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
"alshueiliproject.github.io/.git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
"alshueiliproject.github.io/.git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
"alshueiliproject.github.io/.git/objects/5a/8213afc9baac20f06be5c29537520ac5c07dc4": "633d439920293c5666ed179f20fbaea6",
"alshueiliproject.github.io/.git/objects/5d/15672c94d052a73b76f679931d48a500ba7c7e": "f5f01d11ea277f6e147ede3404bdef3d",
"alshueiliproject.github.io/.git/objects/61/4ea51b2108c71704ddb7c9a50c6b207f734f9f": "a0a7e86ab218eb284aee796b10dc57da",
"alshueiliproject.github.io/.git/objects/61/b88323adaf0740aec3110f79588ff0cf18755a": "72f0fba2a150c96cfc43b3852aef705e",
"alshueiliproject.github.io/.git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
"alshueiliproject.github.io/.git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
"alshueiliproject.github.io/.git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
"alshueiliproject.github.io/.git/objects/69/6142e601534e5a06bd5607f1d323a8bf7f65fa": "d7e025ef13cd770a9566e715b577ae66",
"alshueiliproject.github.io/.git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
"alshueiliproject.github.io/.git/objects/69/fe8d686f0f1a4ddb9581ae1120a7a8fe7ea128": "d6c30dafed59bcab6acc3527421046a4",
"alshueiliproject.github.io/.git/objects/6a/7ade3ac277d686b61f8f14e97e0e431641f7fa": "38ef5fd3e36cffad0e6e94e22ec4de78",
"alshueiliproject.github.io/.git/objects/6d/6ab157825496cbef2d18e4ffc3181f57c62811": "8d0e725449d4fcefb90c37f1180c6f37",
"alshueiliproject.github.io/.git/objects/6f/2011b07edda45e041616c8cba11ad84618fd17": "315fb94b1d750f41e7a7ab2100c0e698",
"alshueiliproject.github.io/.git/objects/6f/ff5eb4f291510f4abfd7ac46da496a59ef661a": "7d041446e22340ae43d0b6b5b6713d5e",
"alshueiliproject.github.io/.git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
"alshueiliproject.github.io/.git/objects/73/110219218bb37863b059c60ac0216641dd09a7": "8cd67fb1a15c3f6fb1609b8b40377624",
"alshueiliproject.github.io/.git/objects/74/4444c7b6dcd62bee5d5960180fb49ed76d2436": "ada1a691ee12cf16c01d196629dd1984",
"alshueiliproject.github.io/.git/objects/74/7f56cfe31e49d537d428334035246de297f04e": "e4b4c782394c978857dce5223bf09dec",
"alshueiliproject.github.io/.git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
"alshueiliproject.github.io/.git/objects/75/377e040c7689d8c090056f896ebe78a72e6add": "663c59672b40bc151c106050bb987543",
"alshueiliproject.github.io/.git/objects/77/a68b9d66cc03398559cb78120be0518b22a24c": "3b6397b7ae4fe62984b14c5d9c734c13",
"alshueiliproject.github.io/.git/objects/78/8d5fa610e26111221d8b3c0ea0027594246adc": "9be0c61a82915fef9ec0726aa231c0c7",
"alshueiliproject.github.io/.git/objects/79/96ce7b5a6df12db5ac89c7d4ebdb0b6cc67bb3": "9080bd2d25cb7b18d34b332cbcee3f93",
"alshueiliproject.github.io/.git/objects/7b/7987d00f2fa22af3bc3e1c08b8bab56f8c806f": "3bd2654fd060e5654832d82ae1882714",
"alshueiliproject.github.io/.git/objects/7b/bf3615d11073bb81e7216f30001514bba94555": "1fead0ae4d927a2242f06fc6f3ddbbbf",
"alshueiliproject.github.io/.git/objects/80/86c3c1ff936799f257fea2f51949edcd9a858e": "2284bbcf2a70b942bc0e6af5b750d071",
"alshueiliproject.github.io/.git/objects/81/b68c98ae548961a60cd5fe2d16540555701088": "8802792cb213ba9f06f891e5b65b48b4",
"alshueiliproject.github.io/.git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
"alshueiliproject.github.io/.git/objects/86/6aa9c331665275fbe1ddc937b48aaf6e590a24": "36d06bc3c07a73293241991256822701",
"alshueiliproject.github.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"alshueiliproject.github.io/.git/objects/89/8634ac782f270a502b1cf227e029ede783a0f2": "44e7b34d4b55e09543d2cc775ca0968b",
"alshueiliproject.github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"alshueiliproject.github.io/.git/objects/8d/4ad5a14c48e5ade235f015bcfe029d5f7218e1": "9e65249b1b17e11d10b5352206d19861",
"alshueiliproject.github.io/.git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
"alshueiliproject.github.io/.git/objects/90/5c5d2b4e62111b7bb6c87700aaf250af984756": "ba7a49f1b1a9b3d50e7bf48366e67d2e",
"alshueiliproject.github.io/.git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
"alshueiliproject.github.io/.git/objects/95/c66ea35ea0b98baf0e0e034d3bdce00b965ce4": "ffde9bc0bd228c539d94a3d7aa844712",
"alshueiliproject.github.io/.git/objects/98/1bc73ef5f9543752c19836673631bd1f0a67ba": "bcb02e7d11799cfa611d9bcc6b59a7a9",
"alshueiliproject.github.io/.git/objects/9b/307c652dc7ac78cf4c00d3c82118cb88cc77a5": "689c160285be12b16de13dd6aed1eec3",
"alshueiliproject.github.io/.git/objects/9b/95d70901007467fd27917b99df9e0d9d480033": "8369abe9d21cc6753b8bc0d8b0410497",
"alshueiliproject.github.io/.git/objects/9b/ae5eb78ee5c93142bc74215c6053e3e506dbf2": "673acc18b382f0254e891b36c5a640bb",
"alshueiliproject.github.io/.git/objects/9c/8c8cdc70779df31e13cf7efa3a49b522e63ff6": "445f2f84c1ca4cb6c81baae94582675a",
"alshueiliproject.github.io/.git/objects/9e/0ece3235b0aa10b18ed45a6ddc856139a74b57": "37f9e9881a0a70f9e6e32e373ca8aa36",
"alshueiliproject.github.io/.git/objects/a3/335e54d52cc7f18c251e2386140a1dd39957bd": "6f243d08de21fab81e554ccfabe57537",
"alshueiliproject.github.io/.git/objects/a8/f699061a0a44a5827dc91a4862ca5416f0cb94": "e4162d25f5d29b7ca9b901f055e5e29c",
"alshueiliproject.github.io/.git/objects/ac/4df3f3406aeb3fa6a7855b4dda418fb8275090": "11a6b2132714c075c85b1cec4d70ff9e",
"alshueiliproject.github.io/.git/objects/ad/8f27ac060b561801f42e17258f59807c45e40c": "f67e7566399cc2deee228f1dd25a2828",
"alshueiliproject.github.io/.git/objects/ae/f55c153e902094c1d4f3de9fcbc85e4f8b6ffb": "64aac2e3b7bb5f01b792a0ed5400f95f",
"alshueiliproject.github.io/.git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
"alshueiliproject.github.io/.git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
"alshueiliproject.github.io/.git/objects/b5/b4a774165820c5983fbd06307e698d061049a7": "98ed5a714b26850c3266c28a1e8b0698",
"alshueiliproject.github.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"alshueiliproject.github.io/.git/objects/b8/469c4752b8555940c4c81e0a6c5bd32cdc0266": "a75159db866d99d0b151811dcecc274d",
"alshueiliproject.github.io/.git/objects/b8/5abe6ccf311b8aca3dd89d4897d959a8fcd8dc": "3155dbc49fbf48f7a9977245ac543204",
"alshueiliproject.github.io/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"alshueiliproject.github.io/.git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
"alshueiliproject.github.io/.git/objects/ba/74e22ab5ba1da132b4001f2a970d6d8ea6290d": "3380409abace91824d23d933cd54753e",
"alshueiliproject.github.io/.git/objects/ba/c51127c0ddf71832daf8c3a2cb04a8cb33a8c8": "84084da57d80c946e90583fe5c3a0953",
"alshueiliproject.github.io/.git/objects/bb/2d80b05bd3b34debc8910a420c50a8c6388e2e": "b8e14a7fba41bed0a5e4ae0dfa71fbc7",
"alshueiliproject.github.io/.git/objects/bb/2e8875a993f9c7d9e45d0eeffa839550cc6287": "3ad141b01f3a79c62e799ae0a1b6dd7d",
"alshueiliproject.github.io/.git/objects/c0/215c30e3cdc2bd95d8364cf750d4db8970b8f0": "99b258f169bfdb2346fec2c9e2bb4552",
"alshueiliproject.github.io/.git/objects/c1/54b233e759ef6a37a23a26cfa19c63519421ff": "1a173516b96aea2d32c90e57a6b2a447",
"alshueiliproject.github.io/.git/objects/c1/835b40acf8f225f80f4601ee823338594ac853": "f1a061b10a50fc4d5cb3ceae39604a3d",
"alshueiliproject.github.io/.git/objects/c4/35861b52b7a9829359b005df7dbc41aa3746f0": "13787d4ab9ee7c8fa20800a30fcc74fb",
"alshueiliproject.github.io/.git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
"alshueiliproject.github.io/.git/objects/ca/d63cedc353d02519b674198590439052e7dffb": "46915e3847f66134a911bf50f5b16835",
"alshueiliproject.github.io/.git/objects/cb/8fa02a768625bc8fc6c48e1d34e7a934ea0795": "601497413329c10a41d94ea961a0817c",
"alshueiliproject.github.io/.git/objects/cc/40407afaf600435dc5109ea4cedc9ecda8c8a4": "6be5b12243e7eb20f3209aef86ba2314",
"alshueiliproject.github.io/.git/objects/cc/8e60790170a5f1b13bd9cce05066699f802715": "462a18513b83dd38919fb521bb9f7100",
"alshueiliproject.github.io/.git/objects/cd/401aaa4e0fc2509069a7778272fd7fa505a6dc": "b2b7c5afa8395790f4d7d6e628d7d197",
"alshueiliproject.github.io/.git/objects/ce/01815938ca8444329e04472614e66b1f712c00": "bb7d1994c9c553f1fbd8254bbd600283",
"alshueiliproject.github.io/.git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
"alshueiliproject.github.io/.git/objects/d1/6f30f81c39e31b673e6b883e1fe2febf29676b": "980feb63badbb7347c8113d1bd14f32a",
"alshueiliproject.github.io/.git/objects/d2/9210ad27e4a2ce8652454db511607ec9ff8caf": "ef787f6a8ce9453c696d23f6971b0015",
"alshueiliproject.github.io/.git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
"alshueiliproject.github.io/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
"alshueiliproject.github.io/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"alshueiliproject.github.io/.git/objects/da/002dad33c3ec38f537cf1826cc9cec26a0e7c4": "250759b613cea1d9ae7c5cb399198106",
"alshueiliproject.github.io/.git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
"alshueiliproject.github.io/.git/objects/da/e1332acc14a2c7eec9d0e721456eb0ea5bc3de": "27ad000b82de2dbdffa744c35ef6d7de",
"alshueiliproject.github.io/.git/objects/dd/090e33e3349435342aecae3befa84abd76c023": "56f4a2448936c7fa11d31c9afd50ee5e",
"alshueiliproject.github.io/.git/objects/de/f04cbc18c4cc35d0ffedba72898d07e368a80c": "195f64d61ab06a90129538b28f47fbf8",
"alshueiliproject.github.io/.git/objects/df/a72ce808fbb783042da88ce1bae5d9adb54fb6": "a8b2273e3e67083e15260d16437b2050",
"alshueiliproject.github.io/.git/objects/e1/f25bde342a9f44d2010e258a99bdef0c370266": "058834795214b287498ed94eec3538de",
"alshueiliproject.github.io/.git/objects/e2/4cdd0ef4a41c93300a8ab897404e0dd96551dc": "1bdc434cfc6446e616c2f8cea7c00c38",
"alshueiliproject.github.io/.git/objects/e3/dec8e4de39a0d4b780a9b99294f7053e342c73": "9bae565d457565c8ad43a652d0e493b7",
"alshueiliproject.github.io/.git/objects/e4/c3f5b2e400fcf70410dcac105303fa3316613c": "a0c6e7bc1defe76489525a183fe45a90",
"alshueiliproject.github.io/.git/objects/e5/a134766131868ff8ec5eb54b68842fd71987a4": "21af2b2b7df9041fd30cefbc0b7c5fd8",
"alshueiliproject.github.io/.git/objects/e7/6181f12d1f0d0e3df66112477201d54a45d91d": "e8043ff1084eae5f4dc90ebe4870d8c9",
"alshueiliproject.github.io/.git/objects/e9/308dd1b78185846b42bc03b4b5a9252ed3f131": "c5e810b0aca9c067c20ac288789ecabc",
"alshueiliproject.github.io/.git/objects/e9/873e78f334bb6501120bf0f2559a9e89a94220": "8e9c50e461490a8f848eeb523cc50411",
"alshueiliproject.github.io/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"alshueiliproject.github.io/.git/objects/eb/e44c8f88225a236ec31e95e1706cbb5d88cfaf": "3b002392df9436ba68cb96fa532ed14b",
"alshueiliproject.github.io/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
"alshueiliproject.github.io/.git/objects/f2/3b676c91412900c3181a21c5a9011485568b5e": "66c6442682683ee934a075eb92364f10",
"alshueiliproject.github.io/.git/objects/f3/b8e5f4444103d2b572da4ce5ffaf7fa6cf2a2d": "4206eb4542182045d23731d9ed07a6a2",
"alshueiliproject.github.io/.git/objects/f6/03fbdeb2815a7cd9ac15e7184038944e4d2bf0": "fbf27b757034a8e950fce854bbed6772",
"alshueiliproject.github.io/.git/objects/fc/acf6772dd17182699895f1be7f9fa4466cace8": "626a9a922580e0146983c3a4e65a8661",
"alshueiliproject.github.io/.git/objects/fe/adb62cb8a115c9d4d83246d943d48efc8fbbf8": "0b94ee47262df6e1aeae1d53cdc7c4c4",
"alshueiliproject.github.io/.git/objects/pack/pack-93231693cce289d43ff9931630cb9104371df4e9.idx": "53d58b55f17ef536c6887abb2234d5d1",
"alshueiliproject.github.io/.git/objects/pack/pack-93231693cce289d43ff9931630cb9104371df4e9.pack": "77d0a8f5699b8adcca71453fd1487e72",
"alshueiliproject.github.io/.git/objects/pack/pack-93231693cce289d43ff9931630cb9104371df4e9.rev": "a504466ce03850958ae95b62338f8209",
"alshueiliproject.github.io/.git/packed-refs": "59de0f8e9ef1f22d8a12b3924cc1ff86",
"alshueiliproject.github.io/.git/refs/heads/main": "ddf998de5f1ed61268327005358935ba",
"alshueiliproject.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"alshueiliproject.github.io/.git/refs/remotes/origin/main": "ddf998de5f1ed61268327005358935ba",
"alshueiliproject.github.io/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"alshueiliproject.github.io/assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"alshueiliproject.github.io/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"alshueiliproject.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"alshueiliproject.github.io/assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"alshueiliproject.github.io/assets/NOTICES": "27d5bc3ec8b77b7edaf14b20057188bb",
"alshueiliproject.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"alshueiliproject.github.io/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"alshueiliproject.github.io/canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"alshueiliproject.github.io/canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"alshueiliproject.github.io/canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"alshueiliproject.github.io/canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"alshueiliproject.github.io/canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"alshueiliproject.github.io/canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"alshueiliproject.github.io/canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"alshueiliproject.github.io/canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"alshueiliproject.github.io/canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"alshueiliproject.github.io/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"alshueiliproject.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"alshueiliproject.github.io/flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"alshueiliproject.github.io/flutter_bootstrap.js": "6e2d6ac19b2810fcc972299216a95ff9",
"alshueiliproject.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"alshueiliproject.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"alshueiliproject.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"alshueiliproject.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"alshueiliproject.github.io/index.html": "683948c09360d0ce81347282df20f2a1",
"alshueiliproject.github.io/main.dart.js": "20ac03e08f3fc850866c97998a942d01",
"alshueiliproject.github.io/manifest.json": "484bcfaee7dda26c8934b6f0a1f7c1c1",
"alshueiliproject.github.io/version.json": "b3c25d78bb96f4352f7edc20a377d58b",
"assets/AssetManifest.bin": "dfe41458c1f99653fa2c7aa04778e047",
"assets/AssetManifest.bin.json": "beaf15e013cb5a3724be474940b925ba",
"assets/AssetManifest.json": "1a69eb72c0c8a334607b96cfe6ea2575",
"assets/assets/fonts/Changa/Changa-Bold.ttf": "824663a52d6a4f91fa2f4fc1487ac812",
"assets/assets/fonts/Changa/Changa-Light.ttf": "50d36c726372eebdd4f3547a2a962256",
"assets/assets/fonts/Changa/Changa-Regular.ttf": "a3bd1c455839c659335ff3d69774a2e1",
"assets/assets/fonts/googlefonts/notoKufiArabic.ttf": "8ae7c85c9dadd02e28302f6580fe18b6",
"assets/assets/fonts/googlefonts/poppins.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/googlefonts/poppins_bold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/googlefonts/tajawal.ttf": "79bb19e04937c19974260fcb4128270e",
"assets/assets/fonts/googlefonts/tajawal_bold.ttf": "6b10b55e4df612910047b7e5d596a9d5",
"assets/assets/fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-Light.ttf": "fc8d66d7803c5703326895c99f36aa39",
"assets/assets/fonts/IBM_Plex_Sans_Arabic/Markazi-Regular.ttf": "ea1c171861f2511814c6665eed2cd1fb",
"assets/assets/fonts/Lato/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/assets/fonts/Lato/Lato-Light.ttf": "2bcc211c05fc425a57b2767a4cdcf174",
"assets/assets/fonts/Lato/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/icons/cities.jpg": "1665278ebbc3d8c01e4608d711346924",
"assets/assets/icons/city.png": "580df2d32d510a9fe13301cdfa489a71",
"assets/assets/icons/home.png": "9cd17f838c1b540c8abd98bc4dc2ed4c",
"assets/assets/icons/import.png": "95673710c7ab3512fac69b6dc839f84f",
"assets/assets/icons/materials.png": "374d1e9429045b28977627a7f57ecbd7",
"assets/assets/icons/notification.png": "79d5a9ace9987a05d4a45e770e6d3b3d",
"assets/assets/icons/open_app.png": "9978c7b46621e5be605eb5b53d639e5f",
"assets/assets/icons/order.jpg": "0a7d056800468d0c2f58d3d1938a2048",
"assets/assets/icons/password.png": "ff031dc8c0ea3068f2b3cec1a7d0476a",
"assets/assets/icons/process.png": "de23cba450e316d8be43a1f4eb09c9cd",
"assets/assets/icons/request.png": "a7225ba878526d44828f0edee5beadcf",
"assets/assets/icons/resetPassword.svg": "345c09f98f07922633e8098ccfa37a39",
"assets/assets/icons/setting.png": "a195c84347c6d8c3b839a73e908818e9",
"assets/assets/icons/user.png": "4e7daa217ec431abbf27594041f0fd3e",
"assets/assets/icons/users.png": "9639a2c0b3dd3c16bf86b1396394cba9",
"assets/assets/icons/user_group.png": "d27a07cc4d53f8720b95a2882ea5fde7",
"assets/assets/icons/workflow.jpg": "d49f0b7880118292528fd55e34cefd7b",
"assets/assets/images/applogo/app_icon.gif": "c53c756d160c35036854758c3450ca57",
"assets/assets/images/applogo/app_icon.png": "c42d062d7cb37252a58da6c8f9ce90b1",
"assets/assets/images/applogo/app_logo.gif": "2e0c182506ea3e73cbcb5b4c6941c072",
"assets/assets/images/applogo/app_logo.png": "ba7223000147584a631d1a7ba9a3715c",
"assets/assets/images/applogo/app_onboarding.png": "819478b68f5d15e4d205760cfc00b965",
"assets/assets/images/applogo/report_logo.png": "c271cd118c51599453e0c2bfc95e6033",
"assets/assets/images/common/default_image.png": "4b1287b9af362426b38e37aee4a16015",
"assets/assets/images/common/loading.gif": "0ac274e561067ee9d830b19fb13dac5c",
"assets/assets/images/common/loading_circle.gif": "017b174fe3e966c9ee36743b035ae4d2",
"assets/assets/images/common/main_bottom_left.png": "f1f07cc7babca32fa09a2ddb0cdf0a64",
"assets/assets/images/common/main_bottom_right.png": "f247bbfe67da1a881c7f6bc87cfff3b7",
"assets/assets/images/common/main_top_left.png": "820d8fe08bd4f16e6e3e4de599590fae",
"assets/assets/images/common/main_top_right.png": "93aba9d119845357933c0c59e32e9e44",
"assets/assets/images/common/page_view1.jpg": "406e15815cf62eab7b09886ca1f68303",
"assets/assets/images/common/page_view2.png": "8bcd060e9a320bb093f7789d6cded4dd",
"assets/assets/images/common/page_view3.jpg": "b2caffc6e2e80e0bb737361195a527f9",
"assets/assets/images/common/person.png": "e8c00b50b81afb0f0cdb26c05b72adc8",
"assets/assets/images/common/saeed.jpg": "12ff00e25be69b2306e9f47e47b5feb3",
"assets/assets/images/common/shop_img_defult.png": "f6941d7cd31c1046281a1d732260148b",
"assets/FontManifest.json": "ce0a7fe30716ae16a5d2f49ee1c7d9f4",
"assets/fonts/MaterialIcons-Regular.otf": "8470ed8f6fbaa4e290bef2971b03feeb",
"assets/NOTICES": "603f06aa2900aadd2af0df42df173f22",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6fd8d1b9099f6c8ef5e6980f6d534690",
"assets/packages/elegant_notification/assets/icons/error.png": "2a84d22ca4a8d9123f1e3149121b0976",
"assets/packages/elegant_notification/assets/icons/info.png": "84b36b60ddacca6c063112fd636bdefb",
"assets/packages/elegant_notification/assets/icons/success.png": "a27784120d6634f48b24e12c4604f9d9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "66419e3fbbbf538e15b800f411375ea1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "91b5eba55d418a940bf2a4c4e0b4df23",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "668baab6ba7f8160b705dc40bb8bcfe9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "1a5a853f8ea3e6bba6bf27ff18f94ead",
"firebase-messaging-sw.js": "24c1413ece8aac6c6e71534f33cbd133",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "f84cb17680317248373229ef6c1f1b80",
"icons/Icon-192.png": "db908bf942cd49c6b9f6fac32560b10b",
"icons/Icon-512.png": "decc54c53bd23581c94ef640098d9fb1",
"icons/Icon-maskable-192.png": "db908bf942cd49c6b9f6fac32560b10b",
"icons/Icon-maskable-512.png": "decc54c53bd23581c94ef640098d9fb1",
"index.html": "7c56029e9e9562ee95d5353359adb4a1",
"/": "7c56029e9e9562ee95d5353359adb4a1",
"main.dart.js": "03087e08dbce0941a27df00610dc6550",
"manifest.json": "cba31c3886346332cf685aac3e082d36",
"version.json": "4199ba1637d07d4916d53599b6fb34dd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
