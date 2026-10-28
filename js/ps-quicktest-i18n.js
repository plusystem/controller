/* ================================================================
   پلاس سیستم — مترجم داینامیک منوی تست سریع
   این اسکریپت متن‌های انگلیسی تولیدشده توسط core.js را در
   #quickTestModal به فارسی ترجمه می‌کند.
   ================================================================ */
(function () {
  'use strict';

  /* ========== دیکشنری ترجمه ========== */
  const I18N = {
    // --- نام تست‌ها ---
    'USB': 'USB',
    'USB Test': 'تست USB',
    'Connection': 'اتصال',
    'Connection Test': 'تست اتصال',
    'Buttons': 'دکمه‌ها',
    'Button Test': 'تست دکمه‌ها',
    'Buttons Test': 'تست دکمه‌ها',
    'Button': 'دکمه',
    'IMU': 'ژیروسکوپ',
    'IMU Test': 'تست ژیروسکوپ',
    'Motion Sensors': 'سنسورهای حرکتی',
    'Motion Sensor': 'سنسور حرکتی',
    'Gyro': 'ژیروسکوپ',
    'Gyroscope': 'ژیروسکوپ',
    'Accelerometer': 'شتاب‌سنج',
    'Gyroscope Test': 'تست ژیروسکوپ',
    'Accelerometer Test': 'تست شتاب‌سنج',
    'Trackpad': 'تاچ‌پد',
    'Touchpad': 'تاچ‌پد',
    'Touchpad Test': 'تست تاچ‌پد',
    'Trackpad Test': 'تست تاچ‌پد',
    'Haptic': 'موتور لرزش',
    'Haptics': 'موتور لرزش',
    'Haptic Test': 'تست موتور لرزش',
    'Vibration': 'لرزش',
    'Vibration Test': 'تست لرزش',
    'Adaptive Triggers': 'تریگرهای تطبیقی',
    'Adaptive Trigger': 'تریگر تطبیقی',
    'Adaptive Trigger Test': 'تست تریگرهای تطبیقی',
    'Trigger': 'تریگر',
    'Triggers': 'تریگرها',
    'Speaker': 'بلندگو',
    'Speaker Test': 'تست بلندگو',
    'Microphone': 'میکروفون',
    'Mic': 'میکروفون',
    'Microphone Test': 'تست میکروفون',
    'Mic Test': 'تست میکروفون',
    'Lights': 'چراغ‌ها',
    'Light Bar': 'نوار نور',
    'Lightbar': 'نوار نور',
    'Lights Test': 'تست چراغ‌ها',
    'Light Bar Test': 'تست نوار نور',
    'LEDs': 'ال‌ای‌دی‌ها',
    'Headphone': 'هدفون',
    'Headphones': 'هدفون',
    'Headphone Test': 'تست هدفون',
    'Audio': 'صدا',
    'Audio Test': 'تست صدا',
    'Battery': 'باتری',
    'Battery Test': 'تست باتری',

    // --- وضعیت‌ها ---
    'Test successful': 'تست موفق',
    'Test succeeded': 'تست موفق',
    'Test passed': 'تست قبول شد',
    'Passed': 'قبول',
    'Success': 'موفق',
    'OK': 'سالم',
    'Test failed': 'تست ناموفق',
    'Failed': 'ناموفق',
    'Failure': 'شکست',
    'Error': 'خطا',
    'Not tested': 'تست نشده',
    'Not started': 'شروع نشده',
    'Not Tested': 'تست نشده',
    'In progress': 'در حال انجام',
    'In Progress': 'در حال انجام',
    'In-Progress': 'در حال انجام',
    'Running': 'در حال اجرا',
    'Pending': 'در انتظار',
    'Skipped': 'رد شد',
    'Completed': 'تکمیل شد',
    'Complete': 'تکمیل',
    'Done': 'انجام شد',
    'Ready': 'آماده',
    'Waiting': 'در انتظار',
    'Waiting...': 'در انتظار...',
    'Testing...': 'در حال تست...',

    // --- دستورالعمل‌ها ---
    'Press any button': 'هر دکمه‌ای را فشار دهید',
    'Press any button on the controller': 'هر دکمه‌ای روی دسته را فشار دهید',
    'Press the button': 'دکمه را فشار دهید',
    'Press all buttons': 'همه دکمه‌ها را فشار دهید',
    'Press every button': 'همه دکمه‌ها را فشار دهید',
    'Press every button on the controller': 'همه دکمه‌های روی دسته را یک‌به‌یک فشار دهید',
    'Press the buttons': 'دکمه‌ها را فشار دهید',
    'Press the highlighted button': 'دکمه‌ی هایلایت‌شده را فشار دهید',
    'Move the sticks': 'آنالوگ‌ها را حرکت دهید',
    'Move the left stick': 'آنالوگ چپ را حرکت دهید',
    'Move the right stick': 'آنالوگ راست را حرکت دهید',
    'Move the stick': 'آنالوگ را حرکت دهید',
    'Rotate the sticks': 'آنالوگ‌ها را بچرخانید',
    'Rotate the stick': 'آنالوگ را بچرخانید',
    'Circle the sticks': 'آنالوگ‌ها را دور بزنید',
    'Circle the stick': 'آنالوگ را دور بزنید',
    'Touch the touchpad': 'تاچ‌پد را لمس کنید',
    'Touch and move on the touchpad': 'تاچ‌پد را لمس و حرکت دهید',
    'Swipe on the touchpad': 'روی تاچ‌پد بکشید',
    'Press the touchpad': 'تاچ‌پد را فشار دهید',
    'Tap the touchpad': 'روی تاچ‌پد ضربه بزنید',
    'Press L2': 'L2 را فشار دهید',
    'Press R2': 'R2 را فشار دهید',
    'Press L2 and R2': 'L2 و R2 را فشار دهید',
    'Press the trigger': 'تریگر را فشار دهید',
    'Press the triggers': 'تریگرها را فشار دهید',
    'Release the trigger': 'تریگر را رها کنید',
    'Hold the button': 'دکمه را نگه دارید',
    'Hold the trigger': 'تریگر را نگه دارید',
    'Listen': 'گوش کنید',
    'Listen carefully': 'با دقت گوش کنید',
    'Listen to the sound': 'به صدا گوش کنید',
    'Speak into the microphone': 'داخل میکروفون صحبت کنید',
    'Listen to the speaker': 'به بلندگو گوش کنید',
    'Connect headphones': 'هدفون را متصل کنید',
    'Check the light bar color': 'رنگ نوار نور را بررسی کنید',
    'Look at the light bar': 'به نوار نور نگاه کنید',
    'Look at the lights': 'به چراغ‌ها نگاه کنید',
    'Check the light': 'چراغ را بررسی کنید',
    'Check the LEDs': 'ال‌ای‌دی‌ها را بررسی کنید',
    'Tilt the controller': 'دسته را کج کنید',
    'Rotate the controller': 'دسته را بچرخانید',
    'Move the controller': 'دسته را حرکت دهید',
    'Shake the controller': 'دسته را تکان دهید',
    'Turn the controller': 'دسته را بچرخانید',
    'Rotate it clockwise': 'در جهت عقربه‌های ساعت بچرخانید',
    'Rotate it counter-clockwise': 'خلاف جهت عقربه‌های ساعت بچرخانید',
    'Do this for each stick': 'این کار را برای هر آنالوگ انجام دهید',
    'Do the same for the right stick': 'همین کار را برای آنالوگ راست هم انجام دهید',
    'Watch the value change': 'تغییر مقدار را ببینید',
    'Watch the indicator': 'نشانگر را تماشا کنید',
    'You should hear a sound': 'باید یک صدا بشنوید',
    'You should feel vibration': 'باید لرزش را احساس کنید',
    'You should see a change': 'باید تغییری ببینید',
    'The light bar should change color': 'رنگ نوار نور باید تغییر کند',
    'The light should turn on': 'چراغ باید روشن شود',

    // --- UI عمومی ---
    'Skip': 'رد کردن',
    'Skip test': 'رد کردن تست',
    'Skip Test': 'رد کردن تست',
    'Skip this test': 'این تست را رد کن',
    'Skip this': 'رد کن',
    'Add test': 'افزودن تست',
    'Add Test': 'افزودن تست',
    'Close': 'بستن',
    'Next': 'بعدی',
    'Previous': 'قبلی',
    'Back': 'بازگشت',
    'Continue': 'ادامه',
    'Start': 'شروع',
    'Start test': 'شروع تست',
    'Start Test': 'شروع تست',
    'Finish': 'پایان',
    'Reset': 'بازنشانی',
    'Retry': 'تلاش مجدد',
    'Try again': 'دوباره امتحان کنید',
    'Restart': 'شروع مجدد',
    'Refresh': 'بازخوانی',

    // --- خلاصه تست ---
    'Test Summary': 'خلاصه تست‌ها',
    'Test summary': 'خلاصه تست‌ها',
    'No tests completed yet.': 'هنوز تستی تکمیل نشده است.',
    'No tests completed yet': 'هنوز تستی تکمیل نشده است.',
    'All tests passed': 'همه تست‌ها قبول شدند',
    'All tests completed': 'همه تست‌ها تکمیل شدند',
    'Tests passed': 'تست‌های قبول‌شده',
    'Tests failed': 'تست‌های ناموفق',
    'Total': 'مجموع',
    'Passed': 'قبول',
    'Failed': 'ناموفق',
    'Skipped': 'رد شده',
    'completed': 'تکمیل‌شده',
    'passed': 'قبول',
    'failed': 'ناموفق',

    // --- هشدار باتری ---
    'Battery level is low. Tests may fail due to the controller being in power saving mode.':
      'سطح باتری پایین است. تست‌ها ممکن است به‌دلیل حالت صرفه‌جویی انرژی ناموفق شوند.',
    'Battery level is low': 'سطح باتری پایین است',

    // --- متن‌های داخل آکاردئون ---
    'Detected': 'شناسایی شد',
    'Not detected': 'شناسایی نشد',
    'Detected!': 'شناسایی شد!',
    'Press to test': 'برای تست فشار دهید',
    'Press each button to test': 'برای تست، هر دکمه را فشار دهید',
    'All buttons tested': 'همه دکمه‌ها تست شدند',
    'Touchpad pressed': 'تاچ‌پد فشار داده شد',
    'Touch detected': 'لمس شناسایی شد',
    'Move the touch': 'لمس را حرکت دهید',
    'Move the touch to check coordinates': 'لمس را حرکت دهید تا مختصات بررسی شود',
    'Compass': 'قطب‌نما',
    'Values': 'مقادیر',
    'Current value': 'مقدار فعلی',
    'Zero': 'صفر',
    'Center': 'مرکز',
    'Left': 'چپ',
    'Right': 'راست',
    'Top': 'بالا',
    'Bottom': 'پایین',
    'Up': 'بالا',
    'Down': 'پایین',
    'Pressed': 'فشرده',
    'Released': 'رها',
    'Touched': 'لمس‌شده',
    'Not touched': 'لمس‌نشده',
  };

  /* ========== تابع ترجمه متن ========== */
  function translateText(raw) {
    if (!raw || typeof raw !== 'string') return raw;
    const trimmed = raw.trim();
    if (!trimmed) return raw;

    // اگر مستقیم در دیکشنری هست
    if (I18N[trimmed]) {
      return raw.replace(trimmed, I18N[trimmed]);
    }

    // تلاش برای تطبیق بدون حساسیت به حروف کوچک/بزرگ
    for (const key in I18N) {
      if (key.toLowerCase() === trimmed.toLowerCase()) {
        return raw.replace(trimmed, I18N[key]);
      }
    }
    return raw;
  }

  /* ========== ترجمه یک المان (بازگشتی) ========== */
  function translateElement(el) {
    // گره متنی
    if (el.nodeType === Node.TEXT_NODE) {
      const translated = translateText(el.nodeValue);
      if (translated !== el.nodeValue) el.nodeValue = translated;
      return;
    }

    // فقط المان‌ها
    if (el.nodeType !== Node.ELEMENT_NODE) return;

    // ترجمه ویژگی‌ها
    ['placeholder', 'title', 'aria-label', 'alt'].forEach((attr) => {
      const val = el.getAttribute && el.getAttribute(attr);
      if (val && I18N[val.trim()]) {
        el.setAttribute(attr, I18N[val.trim()]);
      }
    });

    // ترجمه فرزندان
    if (el.childNodes) {
      Array.from(el.childNodes).forEach(translateElement);
    }
  }

  /* ========== راه‌اندازی Observer ========== */
  function setupObserver() {
    const target = document.getElementById('quickTestModal');
    if (!target) {
      setTimeout(setupObserver, 500);
      return;
    }

    // ترجمه اولیه
    translateElement(target);

    // تماشای تغییرات داینامیک
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        if (m.type === 'characterData') {
          translateElement(m.target);
        } else if (m.type === 'childList') {
          m.addedNodes.forEach((node) => translateElement(node));
        } else if (m.type === 'attributes') {
          translateElement(m.target);
        }
      });
    });

    observer.observe(target, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ['placeholder', 'title', 'aria-label', 'alt'],
    });

    // برخی محتوا ممکن است با تأخیر اضافه شوند (مثلاً بعد از شروع تست)
    // هر ۵۰۰ میلی‌ثانیه چک سریع انجام می‌دهیم تا محتوای جدید گرفته شود
    setInterval(() => translateElement(target), 500);

    console.log('%c[PluSystem] مترجم تست سریع فعال شد ✓', 'color:#00e5ff;font-weight:bold');
  }

  /* ========== اجرا ========== */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(setupObserver, 800));
  } else {
    setTimeout(setupObserver, 800);
  }
})();