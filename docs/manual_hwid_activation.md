---
id: kms_server
title: KMS Server
---
# KMS Server
## Which KMS does KinovRise use?
- KinovRise is now using digiboy's KMS, here's how it works!
-----------------------------------------------------------
:::danger
KMS servers like kms.digiboy.ir can activate both Windows and Office using KMS keys and CMD commands. Here's how it works:

Activate Windows
Enter the KMS key that matches your Windows version using the command:
```
slmgr /ipk [KEY]
Connect to the KMS server:

slmgr /skms kms.digiboy.ir
```
Activate the license:
```
slmgr /ato
```
Activate Office
Open CMD with Administrator rights.
Run the activation command that matches your Office version:
```
cscript //nologo OSPP.VBS /sethst:kms.digiboy.ir
cscript //nologo OSPP.VBS /act
```
:::
:::caution
# Servers like KMS digiboy usually support activation for business editions of Windows and Office, but not all versions are compatible with KMS activation. 
Here’s a list of Windows and Office editions that KMS typically does not support:

## Windows
- Windows Home Edition (Windows 10 Home, Windows 11 Home)
- Windows Starter Edition (Windows 7 Starter)
- Windows RT (Windows 8 RT)
- Windows 10/11 S Mode (Limited version that only runs Microsoft Store apps)
- Windows Embedded (Windows Embedded Standard, Windows Embedded Compact)
- Windows XP and Windows Vista (Older versions that are no longer supported by Microsoft)
## Microsoft Office
- Office 365 (Subscription-based service, does not use KMS activation)
- Office Home & Student (Personal edition, not supported by KMS)
- Office Home & Business (Small business edition, not supported by KMS)
- Office Personal (Personal edition, not supported by KMS)
- Office 2003 and earlier versions (Do not have KMS activation mechanisms)

These Windows and Office editions usually require individual product keys or direct activation with Microsoft, rather than using a KMS server
:::
## Advice for you (you don't have to read it hehe)
:::caution[Advice]
Note that using an unofficial KMS server may violate Microsoft's terms of use. If you want a legitimate license, it's best to buy a genuine key from Microsoft or an authorized distributor. You can read more here about how to activate Windows using KMS.
:::