# Durum Bilgili Mantık Oluşturma (Statefull Logic) - Gece Modu (Dark Mode)

Bu proje, bu modülde öğrenilen kavram ve teknikleri uygulamanıza ve bunları somut bir projede uygulamanıza olanak tanır. Bu modülde, React'te Form yönetimini üzerine çalıştınız. Stateful logic nedir, bunlar üzerinde custom hooklar nasıl oluşturulur ve birden fazla hook aynı anda nasıl çalıştırılır bunları öğrendiniz. Projenizde bu konulardaki yeterliliğinizi, öğrendiğiniz tüm şeyleri kullanarak oluşturduğunuz bir uygulamayla göstereceksiniz.

## Pratik yapacağınız yetenekler

- Stateful logic içeren custom hooklar yaratmak
- localStorage Web API ile birlikte çalışan hooklar oluşturmak
- tüm hookların aynı anda çalışabilmesini sağlamak

## Giriş

Bu projede kripto para izleme uygulamasını alacak ve 2 custom hook oluşturup, birlikte çalışmalarını sağlayacaksınız, aynı zamanda kullanıcılar gece modunu açıp (dark mode) uygulamayı kullanabilecekler, uygulama kapanıp açılsa bile gece modu daha önce aktif edildiyse uygulama gece modu açık şekilde başlayacak.

**_Görevlerinizi birer birer tamamladığınızdan ve ilerlemeden önce her bir görevi test ettiğinizden emin olun.._**

## Talimatlar

### Görev 1: Proje Kurulumu

- [x] Projeyi forklayın.
- [x] Klonlayın
- [x] Proje dizinine gidin
- [x] `npm install`
- [x] `npm start`

### Görev 2: Proje Gereksinimleri

#### Bir geceModuAc hooku oluşturun

- [x] `hooks` adında bir klasör oluşturun
- [x] `geceModuAc.js` adında bir dosya oluşturun.
- [x] Sadece bir boolean(true/false) state değeri ile yüklenen bir hook oluşturun. Bu değer gece modunun açık olup olmadığını belirlemeye yarayacak.
- [x] Oluşturduğunuz state dilimini ve state'i düzenlemenize yarayan fonksiyonu döndürün.
- [x] App.js'deki geceModu state tanımlamasını oluşturduğunuz geceModuAc hooku ile değiştirin.

#### localStorageKullan hooku oluşturun

- [x] `localStorageKullan.js` adında bir dosya oluşturun.
- [x] Bir key value ve baslangicDegeri alan bir hook oluşturun.

#### geceModuAc çevresinde localStorageKullan 'ı kullanın

- [x] geceModuAc hooku içine localStorageKullan'ı import edin.
- [x] localStorage'a kaydedilmiş değere göre UI'den switche tıklandığında gece modunu açıp kapatmayı ayarlayın.
- [x] App kapatılıp açıldığında gece modu daha önce aktif edildiyse uygulama gece modunda başlasın.

localStorage: Javascript sitelerinin ve uygulamalarının anahtar/değer çiftlerini son kullanma tarihi olmadan bir web tarayıcısında kaydetmesine olanak tanıyan bir özelliktir. Bu, tarayıcıda saklanan verilerin tarayıcı penceresi kapatıldıktan sonra bile devam edeceği anlamına gelir.
