
// --- STEALTH CAMOUFLAGE & QUICK EXIT ---
window.amanCamouflage = function() {
  let overlay = document.getElementById("aman-camo-overlay");
  if (overlay) {
    overlay.remove();
    document.title = "AMAN – أمان";
    return;
  }
  document.title = "أحوال الطقس بالمغرب · Météo Maroc";
  overlay = document.createElement("div");
  overlay.id = "aman-camo-overlay";
  overlay.className = "aman-camo-screen";
  overlay.innerHTML = `
    <div class="camo-bar">
      <div class="camo-brand">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
        <span>المديرية العامة للأرصاد الجوية · Météo Maroc</span>
      </div>
      <div class="camo-meta">
        <span class="camo-clock">${new Date().toLocaleDateString('ar-MA', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
        <button type="button" class="camo-close" onclick="window.amanCamouflage()" title="العودة" aria-label="إغلاق التمويه">✕</button>
      </div>
    </div>
    <div class="camo-container">
      <div class="camo-hero">
        <div class="camo-hero-temp">22°C</div>
        <div class="camo-hero-stat">طقس معتدل ومستقر فوق جل مناطق المملكة</div>
        <div class="camo-hero-details">الرطوبة: 45% · الرياح: 14 كم/س شمالية غربية · الضغط الجوي: 1018 hPa</div>
      </div>
      <div class="camo-grid">
        <div class="camo-item"><b>الدار البيضاء</b><span class="camo-t">21°C</span><small>مشمس</small></div>
        <div class="camo-item"><b>الرباط</b><span class="camo-t">22°C</span><small>صحو</small></div>
        <div class="camo-item"><b>مراكش</b><span class="camo-t">27°C</span><small>مشمس دافئ</small></div>
        <div class="camo-item"><b>طنجة</b><span class="camo-t">20°C</span><small>غائم جزئياً</small></div>
        <div class="camo-item"><b>فاس</b><span class="camo-t">24°C</span><small>صحو</small></div>
        <div class="camo-item"><b>أكادير</b><span class="camo-t">25°C</span><small>مشمس معتدل</small></div>
      </div>
    </div>
    <div class="camo-footer">
      <small>© النشرة الإنذارية والجوية الرسمية بالمغرب — تحديث مستمر</small>
    </div>
  `;
  document.body.appendChild(overlay);
};

window.amanQuickExit = function() {
  try { sessionStorage.clear(); } catch(e){}
  window.location.replace("https://www.google.com");
};

const LG="logo.png";const MK="mark.png";const AI="apple-touch-icon.png";
const T={"account":["حسابي","Mon compte","My account"],"home":["الرئيسية","Accueil","Home"],"ai":["مستشارك","Mostacharak","Mostacharak"],"pai":["مستشارك الذكي: استشارة قانونية ونفسية وأمان رقمي لجميع النساء، يدعم الصوت بكل اللهجات ولغة الإشارة بالفيديو للصم والبكم.","Votre conseiller intelligent : orientation juridique et psychologique, voix multi-dialectes et langue des signes.","Your smart advisor: legal and psychological guidance, voice in all dialects and sign language video."],"about":["من نحن","Qui sommes-nous","About"],"digital":["أمان الرقمي","AMAN Digital","AMAN Digital"],"dir":["دليل الدعم","Annuaire d’aide","Support directory"],"safety":["مخطط السلامة","Plan de sécurité","Safety Plan"],"safetySub":["مخطط السلامة الشخصية التفاعلي للحماية والاستجابة الفورية للمخاطر","Plan de sécurité personnel interactif pour la protection immédiate","Interactive personal safety plan for immediate protection"],"academy":["الأكاديمية","Académie","Academy"],"safe":["المؤسسة الآمنة","Institution sûre","Safe Institution"],"guide":["التوجيه","Orientation","Guidance"],"impact":["الأثر","Impact","Impact"],"qr":["رمز QR","Code QR","QR code"],"contact":["اتصال","Contact","Contact"],"more":["المزيد","Plus","More"],"desc":["المنصة الوطنية للوقاية من العنف ضد النساء والفتيات","Plateforme nationale pour la prévention des violences à l’égard des femmes et des filles","National Platform for the Prevention of Violence Against Women and Girls"],"slogan":["الأمان حق، والمساندة مسؤولية مشتركة.","La sécurité est un droit, le soutien est une responsabilité collective.","Safety is a right, support is a shared responsibility."],"intro":["AMAN منصة مستقلة تعمل على الوقاية من العنف ضد النساء والفتيات من خلال التوعية، والمعلومات الموثوقة، والتوجيه نحو الخدمات المتخصصة.","AMAN est une plateforme indépendante qui œuvre à prévenir les violences à l’égard des femmes et des filles par la sensibilisation, l’information fiable et l’orientation vers des services spécialisés.","AMAN is an independent platform working to prevent violence against women and girls through awareness, reliable information, and guidance to specialized services."],"c1":["اكتشفي خدمات المساعدة","Découvrir les services d’aide","Discover support services"],"c2":["تعرفي على حقوقك","Connaître vos droits","Know your rights"],"c3":["ابحثي عن جهة مختصة","Trouver un organisme spécialisé","Find a specialized organization"],"progs":["البرامج الخمسة","Cinq programmes","Five programs"],"pd":["مقالات ومعلومات موثوقة وإرشادات للسلامة الرقمية.","Articles, informations fiables et conseils de sécurité numérique.","Articles, reliable information, and digital safety guidance."],"pr":["دليل قابل للبحث للجهات المتخصصة في المغرب.","Annuaire consultable des organismes spécialisés au Maroc.","Searchable directory of specialized organizations in Morocco."],"pa":["ورشات وبرامج تعليمية وفعاليات عامة.","Ateliers, programmes éducatifs et événements publics.","Workshops, educational programs, and public events."],"ps":["نهج تطوعي للمؤسسات التعليمية والشركات والشركاء.","Démarche volontaire pour établissements, entreprises et partenaires.","A voluntary approach for institutions, companies, and partners."],"pg":["كيف تجدين الدعم المناسب وتتواصلين مع المختصين.","Comment trouver le bon soutien et contacter des professionnels.","How to find the right support and reach qualified services."],"how":["كيف تعمل AMAN","Comment fonctionne AMAN","How AMAN works"],"hs":["نُعلِم|معلومات موثوقة وتوعية|نُوجّه|نحو جهات مختصة موثقة|نُشارك|مع مؤسسات شريكة ومتخصصة","Informer|Informations fiables et sensibilisation|Orienter|Vers des organismes spécialisés vérifiés|Collaborer|Avec des institutions partenaires et spécialisées","Inform|Reliable information and awareness|Guide|Toward verified specialized organizations|Collaborate|With partner and specialized institutions"],"demo":["محتوى تجريبي — ليس معلومة رسمية أو موثقة.","Contenu de démonstration — information non officielle et non vérifiée.","Demo content — not official or verified information."],"arts":["مقالات توعوية","Articles de sensibilisation","Awareness articles"],"partT":["الشركاء المؤسساتيون","Partenaires institutionnels","Institutional partners"],"partE":["لم يُعلن عن أي شراكة بعد. ستظهر هنا الشراكات المؤكدة فقط.","Aucun partenariat annoncé pour l’instant. Seuls les partenariats confirmés apparaîtront ici.","No partnerships announced yet. Only confirmed partnerships will appear here."],"impT":["مؤشرات الأثر","Indicateurs d’impact","Impact indicators"],"aboutB":["من نحن|منصة اجتماعية مستقلة تعمل عبر شراكات مؤسساتية، قد تتحول مستقبلاً إلى جمعية أو مقاولة اجتماعية. لا تدّعي AMAN حالياً أي صفة قانونية مسجلة.|رؤيتنا|مجتمع يكون فيه الأمان حقاً مضموناً لكل النساء والفتيات.|رسالتنا|التوعية والمعلومات الموثوقة والتوجيه نحو الخدمات المتخصصة.|قيمنا|الكرامة، الاحترام، السرية الواجبة، المسؤولية المشتركة، والدقة.|طموحنا الوطني|التوسع تدريجياً في جهات المغرب الاثنتي عشرة، بدءاً من العيون كتجربة أولى.|نموذج الشراكة|AMAN تكمّل المؤسسات المتخصصة القائمة ولا تحل محلها.","Qui nous sommes|Plateforme sociale indépendante agissant par des partenariats institutionnels, pouvant devenir à terme une association ou une entreprise sociale. AMAN ne prétend pas être déjà enregistrée légalement.|Notre vision|Une société où la sécurité est un droit garanti à toutes les femmes et filles.|Notre mission|Sensibiliser, informer de façon fiable et orienter vers des services spécialisés.|Nos valeurs|Dignité, respect, confidentialité due, responsabilité collective et rigueur.|Notre ambition nationale|S’étendre progressivement aux 12 régions du Maroc, avec Laâyoune comme pilote.|Modèle de partenariat|AMAN complète les institutions spécialisées existantes et ne les remplace pas.","Who we are|An independent social platform working through institutional partnerships. It may become an association or social enterprise in future; AMAN does not claim any registered legal status today.|Our vision|A society where safety is a guaranteed right for all women and girls.|Our mission|Raise awareness, provide reliable information, and guide people to specialized services.|Our values|Dignity, respect, due confidentiality, shared responsibility, and accuracy.|National ambition|Expand gradually across Morocco’s 12 regions, starting with a Laâyoune pilot.|Partnership model|AMAN complements existing specialized institutions and does not replace them."],"search":["بحث…","Rechercher…","Search…"],"all":["الكل","Tous","All"],"cats":["دعم اجتماعي|دعم نفسي|مساعدة قانونية|جمعيات نسائية|مؤسسات عمومية|خدمات الاستماع والتوجيه","Soutien social|Soutien psychologique|Aide juridique|Associations de femmes|Institutions publiques|Écoute et orientation","Social support|Psychological support|Legal assistance|Women’s associations|Public institutions|Listening and guidance"],"artsD":["أنواع العنف|يشمل العنف الجسدي والنفسي والجنسي والاقتصادي والرقمي. التعرف عليه أول خطوة للوقاية.|السلامة الرقمية|راجعي إعدادات الخصوصية، واستعملي كلمات مرور قوية ومختلفة، ولا تشاركي معلومات حساسة مع من لا تثقين به.|كيف أجد الدعم؟|تواصلي مباشرة مع جهات متخصصة. هذه المعلومات تعليمية وليست استشارة قانونية رسمية.","Types de violence|Elle peut être physique, psychologique, sexuelle, économique ou numérique. La reconnaître est la première étape de la prévention.|Sécurité numérique|Vérifiez vos paramètres de confidentialité, utilisez des mots de passe forts et distincts, et ne partagez pas d’informations sensibles avec des inconnus.|Comment trouver du soutien ?|Contactez directement des services spécialisés. Ces informations sont éducatives et ne constituent pas un avis juridique officiel.","Types of violence|It can be physical, psychological, sexual, economic, or digital. Recognizing it is the first step of prevention.|Digital safety|Review privacy settings, use strong and distinct passwords, and avoid sharing sensitive information with people you do not trust.|How do I find support?|Contact specialized services directly. This is educational information, not official legal advice."],"region":["الجهة","Région","Region"],"pend":["في انتظار التحقق","En attente de vérification","Pending verification"],"st":["مخطط لها|قيد التطوير|نشطة|متوقفة مؤقتاً","Planifiée|En développement|Active|Temporairement inactive","Planned|In development|Active|Temporarily inactive"],"empty":["لا توجد نتائج مطابقة. جرّبي تغيير خيارات البحث أو التصفية.","Aucun résultat. Essayez d’autres filtres ou termes de recherche.","No results found. Try changing filters or search terms."],"dirN":["دليل وطني شامل لخلايا التكفل بالنساء ضحايا العنف (محاكم، مستشفيات، أمن وطني، درك ملكي) والجمعيات المتخصصة عبر جهات المغرب الـ12.","Annuaire national des cellules de prise en charge (tribunaux, hôpitaux, sûreté, gendarmerie) et associations à travers les 12 régions du Maroc.","National directory of care units (courts, hospitals, police, gendarmerie) and specialized NGOs across all 12 regions of Morocco."],"verif":["مؤسسة معتمدة ومحققة ✓","Structure vérifiée ✓","Verified organization ✓"],"acT":["أنشطة قادمة","Activités à venir","Upcoming activities"],"ev":["ورشة: السلامة الرقمية|الموعد سيُعلن لاحقاً|ورشة: الاحترام والمساواة|الموعد سيُعلن لاحقاً","Atelier : sécurité numérique|Date à annoncer|Atelier : respect et égalité|Date à annoncer","Workshop: digital safety|Date to be announced|Workshop: respect and equality|Date to be announced"],"reg":["التسجيل في فعالية عامة","Inscription à un événement public","Register for a public event"],"safeT":["الميثاق المؤسسي التطوعي","Charte institutionnelle volontaire","Voluntary institutional charter"],"safeD":["التزام طوعي بالوقاية والاحترام وتوجيه الأشخاص نحو الجهات المتخصصة. لا تمنح AMAN أي شارة أو اعتماد تلقائياً؛ أي اعتراف يتطلب تقييماً موثقاً وموافقة صريحة.","Engagement volontaire pour la prévention, le respect et l’orientation vers des services spécialisés. AMAN n’attribue aucun label automatiquement ; toute reconnaissance exige une évaluation documentée et une approbation explicite.","A voluntary commitment to prevention, respect, and referral to specialized services. AMAN grants no badge automatically; any recognition requires a documented assessment and explicit approval."],"partF":["طلب شراكة","Demande de partenariat","Partnership request"],"em":["إشعار طوارئ","Avis d’urgence","Emergency notice"],"emD":["AMAN ليست خدمة طوارئ ولا تضمن استجابة فورية أو على مدار الساعة. إذا كنتِ في خطر مباشر، اتصلي بخدمات الطوارئ الرسمية في منطقتك.","AMAN n’est pas un service d’urgence et ne garantit aucune réponse immédiate ou 24h/24. En cas de danger immédiat, contactez les services d’urgence officiels de votre région.","AMAN is not an emergency service and does not promise immediate or 24/7 response. If you are in immediate danger, contact official emergency services in your area."],"lv":["معلومات|فهم الموضوع وحقوقك.|توجيه|معرفة الجهة المناسبة لحالتك.|دعم مهني|يقدمه المختصون المؤهلون فقط.","Information|Comprendre le sujet et vos droits.|Orientation|Identifier l’organisme adapté.|Soutien professionnel|Assuré uniquement par des professionnels qualifiés.","Information|Understanding the topic and your rights.|Guidance|Finding the right organization.|Professional support|Provided only by qualified professionals."],"gN":["لا نطلب وصفاً مفصلاً للعنف ولا وثائق هوية ولا موقعاً دقيقاً ولا أدلة. تواصلي مع الجهات المتخصصة مباشرة.","Nous ne demandons ni description détaillée, ni pièces d’identité, ni localisation précise, ni preuves. Contactez directement les services spécialisés.","We do not ask for detailed descriptions, ID documents, precise location, or evidence. Contact specialized services directly."],"imp":["ورشات توعية منجزة|مؤسسات متعاونة|جهات مغطاة|موارد منشورة|سجلات دليل موثقة","Ateliers réalisés|Institutions partenaires|Régions touchées|Ressources publiées|Fiches vérifiées","Workshops conducted|Collaborating institutions|Regions reached|Resources published|Verified directory entries"],"ity":["هدف|إنجاز فعلي|وصول تقديري|مشاركة مؤكدة","Objectif|Réalisé|Portée estimée|Participation confirmée","Target|Actual achievement|Estimated reach|Confirmed participation"],"nyr":["لم يُبلَّغ بعد","Pas encore renseigné","Not yet reported"],"impN":["تُحدّثها الإدارة فقط. لا تُعرض أرقام مختلقة.","Mis à jour par l’administration uniquement. Aucun chiffre inventé.","Updated by administrators only. No invented figures."],"qrD":["امسحي الرمز لفتح بوابة AMAN. لا يوجد أي تتبع للهوية أو الموقع.","Scannez pour ouvrir le portail AMAN. Aucun suivi d’identité ni de localisation.","Scan to open the AMAN portal. No identity or location tracking."],"pr1":["طباعة / حفظ PDF","Imprimer / PDF","Print / save as PDF"],"f":["الاسم (اختياري)|البريد الإلكتروني (اختياري)|الجهة (اختياري)|الموضوع|رسالة عامة","Nom (facultatif)|E-mail (facultatif)|Organisme (facultatif)|Objet|Message général","Name (optional)|Email (optional)|Organization (optional)|Subject|General message"],"pf":["اسم المؤسسة|الشخص المسؤول|البريد المهني|المدينة والجهة|نوع الشراكة المقترحة|رسالة عامة","Nom de l’institution|Personne de contact|E-mail professionnel|Ville et région|Type de partenariat|Message général","Institution name|Contact person|Professional email|City and region|Proposed partnership type|General message"],"ef":["البريد الإلكتروني|الفعالية","E-mail|Événement","Email|Event"],"hint":["لا تكتبي وصفاً لحالة عنف أو معلومات حساسة هنا.","N’écrivez ici aucune description de violence ni information sensible.","Do not describe cases of violence or sensitive details here."],"cons":["أوافق على إشعار الخصوصية: تُستعمل البيانات للرد فقط، دون إعلانات أو تتبع أو بيع.","J’accepte l’avis de confidentialité : données utilisées uniquement pour répondre, sans publicité, suivi ni revente.","I accept the privacy notice: data is used only to reply, with no ads, tracking, or sale."],"send":["إرسال","Envoyer","Send"],"ok":["البيانات سليمة. اختاري طريقة الإرسال — لا يُحفظ نص الرسالة داخل التطبيق.","Données valides. Choisissez le mode d’envoi — le texte n’est pas conservé dans l’application.","Details look good. Choose how to send — the message text is not stored in the app."],"er":["أكملي الحقول المطلوبة (الموضوع/الرسالة/الموافقة) وتحققي من البريد.","Complétez les champs requis (objet/message/consentement) et vérifiez l’e-mail.","Complete the required fields (subject/message/consent) and check the email."],"ci":["البريد الرسمي: [سيُضاف]  ·  الهاتف: [سيُضاف]  ·  التواصل الاجتماعي: [سيُضاف]","E-mail officiel : [à ajouter]  ·  Tél. : [à ajouter]  ·  Réseaux : [à ajouter]","Official email: [to be added]  ·  Phone: [to be added]  ·  Social: [to be added]"],"priv":["الخصوصية: نجمع الحد الأدنى من البيانات، ولا نخزّن أي وصف لحالات العنف، ولا نستعمل متتبعات إعلانية. لم تُراجَع المنصة قانونياً بعد (القانون 09-08 / CNDP) ولا ندّعي الامتثال.","Confidentialité : données minimales, aucune description de cas, aucun traceur publicitaire. Plateforme non encore examinée juridiquement (loi 09-08 / CNDP) ; aucune conformité revendiquée.","Privacy: minimal data, no case descriptions, no ad trackers. Not yet legally reviewed (Law 09-08 / CNDP); no compliance is claimed."],"ftD":["منصة اجتماعية مستقلة غير مسجلة قانونياً حالياً. ليست خدمة طوارئ. المحتوى التجريبي مُعلَّم بوضوح.","Plateforme sociale indépendante, non enregistrée légalement à ce jour. Pas un service d’urgence. Contenu de démo clairement signalé.","Independent social platform, not legally registered at this time. Not an emergency service. Demo content is clearly labeled."],"install":["تثبيت التطبيق","Installer l’application","Install the app"],"inB":["تثبيت الآن","Installer maintenant","Install now"],"inL":["Android (Chrome): افتحي القائمة ⋮ ثم «تثبيت التطبيق» أو «إضافة إلى الشاشة الرئيسية».|iPhone (Safari): اضغطي زر المشاركة ثم «إضافة إلى الشاشة الرئيسية».|الحاسوب (Chrome أو Edge): أيقونة التثبيت في شريط العنوان، أو القائمة ثم «تثبيت».|ملف: يمكنك أيضاً حفظ ملف aman.html وفتحه من الهاتف أو الحاسوب. يلزم الإنترنت لتحميل الخطوط ورمز QR.","Android (Chrome) : menu ⋮ puis « Installer l’application » ou « Ajouter à l’écran d’accueil ».|iPhone (Safari) : bouton Partager puis « Sur l’écran d’accueil ».|Ordinateur (Chrome ou Edge) : icône d’installation dans la barre d’adresse, ou menu puis « Installer ».|Fichier : vous pouvez aussi enregistrer aman.html et l’ouvrir sur téléphone ou ordinateur. Internet reste nécessaire pour les polices et le code QR.","Android (Chrome): open the ⋮ menu, then “Install app” or “Add to Home screen”.|iPhone (Safari): tap Share, then “Add to Home Screen”.|Computer (Chrome or Edge): install icon in the address bar, or menu then “Install”.|File: you can also save aman.html and open it on a phone or computer. Internet is still needed for fonts and the QR code."],"add":["إضافة جهة (قيد المراجعة)","Ajouter un organisme (en modération)","Add organization (pending review)"],"nm":["الاسم|المدينة","Nom|Ville","Name|City"],"rst":["إعادة ضبط","Réinitialiser","Reset"],"ph":["تُحفظ التغييرات في هذا المتصفح فقط إلى أن يُربط الخادم.","Les changements restent dans ce navigateur jusqu’à la connexion du serveur.","Changes stay in this browser only until a backend is connected."],"qx":["خروج سريع","Sortie rapide","Quick exit"],"numT":["أرقام مفيدة للنجدة والاستماع","Numéros d’urgence et d’écoute","Emergency & Support Numbers"],"num":["الشرطة (الأمن الوطني)|الدرك الملكي|إصغاء UNFM (كلنا معاك)|الوقاية المدنية (الإسعاف)","Police (Sûreté Nationale)|Gendarmerie royale|Écoute UNFM (Koulna Maak)|Protection Civile (Secours)","Police (National Security)|Royal Gendarmerie|UNFM Helpline (Koulna Maak)|Civil Protection (Ambulance)"],"numN":["أرقام رسمية مجانية ومفتوحة 24 ساعة / 24 وطيلة أيام الأسبوع عبر كامل التراب الوطني المغربي.","Numéros officiels gratuits et accessibles 24h/24, 7j/7 sur l'ensemble du territoire marocain.","Official toll-free hotlines available 24/7 across the entire Moroccan territory."],"nocf":["لم تُضبط وسائل الاتصال بعد. يمكنكِ نسخ الرسالة وإرسالها يدوياً.","Aucun contact configuré pour l’instant. Copiez le message et envoyez-le manuellement.","No contact channel is set yet. Copy the message and send it manually."],"viaE":["إرسال بالبريد","Envoyer par e-mail","Send by email"],"cp":["نسخ الرسالة","Copier le message","Copy message"],"shr":["مشاركة التطبيق","Partager l’application","Share the app"],"sfT":["سلامتك أولاً","Votre sécurité d’abord","Your safety first"],"trail":["هذا الموقع لا يمسح سجل متصفحك. إذا كنتِ تخافين أن يراقبك أحد، افتحيه في تصفح خاص.","Ce site n’efface pas l’historique de votre navigateur. Si vous craignez d’être surveillée, ouvrez-le en navigation privée.","This site does not erase your browser history. If you fear being watched, open it in private browsing."],"rights":["حقوقك في القانون","Vos droits dans la loi","Your rights under the law"],"rightsD":["القانون 103-13 لمحاربة العنف ضد النساء ساري المفعول منذ شتنبر 2018. ينص على خلايا للتكفل بالنساء ضحايا العنف داخل المحاكم وعدد من المؤسسات العمومية. هذه معلومة عامة وليست استشارة قانونية.","La loi 103-13 relative à la lutte contre les violences faites aux femmes est en vigueur depuis septembre 2018. Elle prévoit des cellules de prise en charge des victimes dans les tribunaux et plusieurs institutions publiques. Information générale, pas un avis juridique.","Law 103-13 on combating violence against women has been in force since September 2018. It provides for care cells for women victims of violence in courts and several public institutions. General information, not legal advice."]};
T.community=["مجتمع أمان","Communauté AMAN","AMAN Community"];
const RG=[["طنجة-تطوان-الحسيمة","Tanger-Tétouan-Al Hoceïma"],["الجهة الشرقية","Oriental"],["فاس-مكناس","Fès-Meknès"],["الرباط-سلا-القنيطرة","Rabat-Salé-Kénitra"],["بني ملال-خنيفرة","Béni Mellal-Khénifra"],["الدار البيضاء-سطات","Casablanca-Settat"],["مراكش-آسفي","Marrakech-Safi"],["درعة-تافيلالت","Drâa-Tafilalet"],["سوس-ماسة","Souss-Massa"],["كلميم-واد نون","Guelmim-Oued Noun"],["العيون-الساقية الحمراء","Laâyoune-Sakia El Hamra"],["الداخلة-وادي الذهب","Dakhla-Oued Ed-Dahab"]];
const rn=i=>L==0?RG[i][0]:RG[i][1];
let L=0;try{L=Math.max(0,["ar","fr","en"].indexOf(localStorage.getItem("aman-l")))}catch(e){}
const t=k=>T[k][L],ts=k=>t(k).split("|");
const NAV=["home","ai","guide","dir","safety","digital","academy","about","safe","qr","contact","install"];
let ORG=[
  // Region 0: Tanger-Tétouan-Al Hoceïma (طنجة-تطوان-الحسيمة)
  {id:"tng-court",n:["خلية التكفل بالنساء ضحايا العنف - محكمة الاستئناف بطنجة","Cellule d'accueil des femmes victimes - Cour d'Appel Tanger","Women Victims Care Unit - Court of Appeal Tangier"],r:0,c:"طنجة / Tanger",k:4,tel:"0539940126",addr:"شارع المقاومة، طنجة",h:"8:30 - 16:30",on:1},
  {id:"tng-chui",n:["وحدة المستعجلات والاستماع - المركز الاستشفائي الجامعي محمد السادس","Unité d'urgence médico-légale - CHU Mohammed VI Tanger","Forensic & Emergency Support Unit - CHU Tangier"],r:0,c:"طنجة / Tanger",k:4,tel:"0539393000",addr:"كزناية، طنجة",h:"24/24",on:1},
  {id:"tng-fldf",n:["مركز النجدة للإصغاء والتوجيه القانوني (FLDF)","Centre Annajda d'écoute et d'orientation (FLDF)","Annajda Listening & Legal Advice Center (FLDF)"],r:0,c:"طنجة / Tanger",k:3,tel:"0539938883",addr:"زنقة موسى بن نصير، عمارة الأمانة، طنجة",h:"9:00 - 17:00",on:1},
  {id:"tet-court",n:["خلية التكفل بالنساء والأطفال - المحكمة الابتدائية بتطوان","Cellule d'accueil des femmes et enfants - TPI Tétouan","Care Unit for Women & Children - First Instance Court Tetouan"],r:0,c:"تطوان / Tétouan",k:4,tel:"0539963050",addr:"شارع محمد الخامس، تطوان",h:"8:30 - 16:30",on:1},
  {id:"hoc-hosp",n:["خلية المساعدة والمواكبة - المستشفى الإقليمي محمد الخامس بالحسيمة","Cellule d'assistance médico-sociale - Hôpital Mohammed V Al Hoceïma","Social & Medical Care Unit - Mohammed V Hospital Al Hoceima"],r:0,c:"الحسيمة / Al Hoceïma",k:4,tel:"0539982425",addr:"الحسيمة المركز",h:"24/24",on:1},

  // Region 1: L'Oriental (الجهة الشرقية)
  {id:"ouj-court",n:["خلية التكفل بالنساء ضحايا العنف - محكمة الاستئناف بوجدة","Cellule d'accueil des femmes - Cour d'Appel Oujda","Support Unit for Women Victims - Court of Appeal Oujda"],r:1,c:"وجدة / Oujda",k:4,tel:"0536682736",addr:"ساحة 9 يوليوز، وجدة",h:"8:30 - 16:30",on:1},
  {id:"ouj-uaf",n:["مركز الاستماع والدعم القانوني والنفسي - اتحاد العمل النسائي بوجدة","Centre d'écoute et de soutien psychologique - UAF Oujda","Listening & Psycho-legal Support - UAF Oujda"],r:1,c:"وجدة / Oujda",k:3,tel:"0536686000",addr:"شارع علال بن عبد الله، وجدة",h:"9:00 - 17:00",on:1},
  {id:"nad-hosp",n:["خلية التكفل الصحي والاجتماعي - المستشفى الإقليمي الحسني بالناظور","Unité médico-sociale - Hôpital El Hassani Nador","Medical & Social Unit - El Hassani Hospital Nador"],r:1,c:"الناظور / Nador",k:4,tel:"0536606212",addr:"حي لعري الشيخ، الناظور",h:"24/24",on:1},
  {id:"brk-entraide",n:["فضاء التوجيه والإدماج - التعاون الوطني ببركان","Espace d'orientation et d'insertion - Entraide Nationale Berkane","Referral & Support Space - Entraide Nationale Berkane"],r:1,c:"بركان / Berkane",k:0,tel:"0536612050",addr:"شارع المسيرة، بركان",h:"8:30 - 16:30",on:1},

  // Region 2: Fès-Meknès (فاس-مكناس)
  {id:"fes-court",n:["خلية التكفل بالنساء ضحايا العنف - محكمة الاستئناف بفاس","Cellule d'accueil des femmes victimes - Cour d'Appel Fès","Care Unit for Women Victims - Court of Appeal Fez"],r:2,c:"فاس / Fès",k:4,tel:"0535622153",addr:"شارع الحسن الثاني، فاس",h:"8:30 - 16:30",on:1},
  {id:"fes-chui",n:["مركز الطب الشرعي وحماية الأسرة - المستشفى الجامعي الحسن الثاني بفاس","Unité médico-légale et de protection familiale - CHU Hassan II Fès","Forensic & Family Protection Unit - CHU Fez"],r:2,c:"فاس / Fès",k:4,tel:"0535619053",addr:"طريق سيدي حرازم، فاس",h:"24/24",on:1},
  {id:"fes-fldf",n:["مركز إيزيس للإصغاء والتوجيه القانوني والنفسي (FLDF فاس)","Centre Isis d'écoute et d'orientation (FLDF Fès)","Isis Listening & Legal Counseling Center (FLDF Fez)"],r:2,c:"فاس / Fès",k:3,tel:"0535624968",addr:"طريق صفرو، تجزئة بدر، فاس",h:"9:00 - 17:00",on:1},
  {id:"mek-court",n:["خلية التكفل بالنساء والأطفال - المحكمة الابتدائية بمكناس","Cellule d'accueil femmes & enfants - TPI Meknès","Women & Children Support Unit - First Instance Court Meknes"],r:2,c:"مكناس / Meknès",k:4,tel:"0535520110",addr:"شارع علال بن عبد الله، حمرية، مكناس",h:"8:30 - 16:30",on:1},
  {id:"taz-entraide",n:["دار المواطن ومركز الاستماع والتوجيه بتازة","Centre d'écoute et d'assistance sociale - Taza","Citizen Center & Listening Unit - Taza"],r:2,c:"تازة / Taza",k:0,tel:"0535672230",addr:"شارع فاس، تازة العليا",h:"8:30 - 16:30",on:1},

  // Region 3: Rabat-Salé-Kénitra (الرباط-سلا-القنيطرة)
  {id:"rab-court",n:["خلية التكفل بالنساء ضحايا العنف - محكمة الاستئناف بالرباط","Cellule d'accueil des femmes victimes - Cour d'Appel Rabat","Women Care Unit - Court of Appeal Rabat"],r:3,c:"الرباط / Rabat",k:4,tel:"0537722216",addr:"شارع النصر، باب الرواح، الرباط",h:"8:30 - 16:30",on:1},
  {id:"rab-chui",n:["وحدة الفحص والعناية بالنساء - مستشفى الأطفال ابن سينا بالرباط","Unité de consultation médico-légale - CHU Ibn Sina Rabat","Consultation & Forensic Unit - CHU Ibn Sina Rabat"],r:3,c:"الرباط / Rabat",k:4,tel:"0537672277",addr:"شارع عبد الرحيم بوعبيد، السويسي، الرباط",h:"24/24",on:1},
  {id:"rab-unfm",n:["المركز الوطني للاستماع والإرشاد القانوني (UNFM - كلنا معاك)","Centre national d'écoute et d'orientation (UNFM - Koulna Maak)","National Listening & Legal Counseling Center (UNFM)"],r:3,c:"الرباط / Rabat",k:5,tel:"8350",addr:"زنقة المرج، حي الرياض، الرباط",h:"24/24 (مجاني / Gratuit)",on:1},
  {id:"rab-adfm",n:["الجمعية الديمقراطية لنساء المغرب (ADFM) - الاستشارة القانونية","Association Démocratique des Femmes du Maroc (ADFM)","Democratic Association of Moroccan Women (ADFM)"],r:3,c:"الرباط / Rabat",k:2,tel:"0537737165",addr:"زنقة أبي رقراق، حسان، الرباط",h:"9:00 - 17:00",on:1},
  {id:"sal-centre",n:["مركز نجوم للتأهيل والإدماج ومناهضة العنف بسلا","Centre Noujoum d'accueil et d'orientation - Salé","Noujoum Reception & Counseling Center - Sale"],r:3,c:"سلا / Salé",k:0,tel:"0537841520",addr:"حي الانبعاث، تابريكت، سلا",h:"9:00 - 17:00",on:1},
  {id:"ken-court",n:["خلية الاستماع والتكفل - المحكمة الابتدائية بالقنيطرة","Cellule d'écoute et d'assistance - TPI Kénitra","Listening & Support Unit - First Instance Court Kenitra"],r:3,c:"القنيطرة / Kénitra",k:4,tel:"0537371515",addr:"شارع ديوان، القنيطرة",h:"8:30 - 16:30",on:1},

  // Region 4: Béni Mellal-Khénifra (بني ملال-خنيفرة)
  {id:"ben-court",n:["خلية التكفل بالنساء ضحايا العنف - محكمة الاستئناف ببني ملال","Cellule d'accueil des femmes - Cour d'Appel Béni Mellal","Women Care Unit - Court of Appeal Beni Mellal"],r:4,c:"بني ملال / Béni Mellal",k:4,tel:"0523482560",addr:"شارع بيروت، بني ملال",h:"8:30 - 16:30",on:1},
  {id:"ben-hosp",n:["وحدة التكفل الصحي والاجتماعي - المركز الاستشفائي الجهوي ببني ملال","Unité médico-sociale d'urgence - Hôpital Régional Béni Mellal","Emergency Medical & Social Unit - Regional Hospital Beni Mellal"],r:4,c:"بني ملال / Béni Mellal",k:4,tel:"0523483244",addr:"طريق مراكش، بني ملال",h:"24/24",on:1},
  {id:"khe-entraide",n:["فضاء الاستماع ومساندة النساء في وضعية هشة بخنيفرة","Espace d'écoute et d'assistance aux femmes - Khénifra","Listening Space for Women in Vulnerable Situations - Khenifra"],r:4,c:"خنيفرة / Khénifra",k:0,tel:"0535586110",addr:"شارع محمد الخامس، خنيفرة",h:"8:30 - 16:30",on:1},
  {id:"kho-court",n:["خلية التكفل بالنساء والأطفال - المحكمة الابتدائية بخريبكة","Cellule d'accueil - TPI Khouribga","Care Unit - First Instance Court Khouribga"],r:4,c:"خريبكة / Khouribga",k:4,tel:"0523491218",addr:"شارع الزلاقة، خريبكة",h:"8:30 - 16:30",on:1},

  // Region 5: Casablanca-Settat (الدار البيضاء-سطات)
  {id:"cas-court",n:["خلية التكفل بالنساء ضحايا العنف - محكمة الاستئناف بالدار البيضاء","Cellule d'accueil des femmes victimes - Cour d'Appel Casablanca","Women Victims Care Unit - Court of Appeal Casablanca"],r:5,c:"الدار البيضاء / Casablanca",k:4,tel:"0522271818",addr:"ساحة الأمم المتحدة، الدار البيضاء",h:"8:30 - 16:30",on:1},
  {id:"cas-chui",n:["مركز الطب الشرعي ووحدة حماية الأسرة - المركز الاستشفائي الجامعي ابن رشد","Unité médico-légale et de protection familiale - CHU Ibn Rochd","Forensic & Family Protection Center - CHU Ibn Rochd"],r:5,c:"الدار البيضاء / Casablanca",k:4,tel:"0522224141",addr:"حي المستشفيات، 1 شارع الإخوة برحمة، الدار البيضاء",h:"24/24",on:1},
  {id:"cas-solfem",n:["جمعية التضامن النسوي (Solidarité Féminine) - دعم وإيواء الأمهات العازبات","Association Solidarité Féminine - Soutien et hébergement d'urgence","Solidarité Féminine Association - Support & Emergency Shelter"],r:5,c:"الدار البيضاء / Casablanca",k:3,tel:"0522904845",addr:"حي النخيل، زنقة 15، المعاريف، الدار البيضاء",h:"8:30 - 17:00",on:1},
  {id:"cas-insaf",n:["جمعية إنصاف (INSAF) - الدعم القانوني والاجتماعي والنفسي للمرأة والطفل","INSAF - Soutien juridique, social et hébergement mère-enfant","INSAF - Legal, Social & Psycho Support for Mothers and Children"],r:5,c:"الدار البيضاء / Casablanca",k:3,tel:"0522475454",addr:"حي الإنارة، عين الشق، الدار البيضاء",h:"9:00 - 17:30",on:1},
  {id:"cas-uaf",n:["مركز أناروز للاستماع والتوجيه القانوني (اتحاد العمل النسائي كازا)","Centre Anaruz d'écoute et d'orientation juridique (UAF Casablanca)","Anaruz Listening & Legal Counseling Center (UAF Casablanca)"],r:5,c:"الدار البيضاء / Casablanca",k:3,tel:"0522204040",addr:"شارع 2 مارس، عمارة الأمل، الدار البيضاء",h:"9:00 - 17:00",on:1},
  {id:"set-court",n:["خلية التكفل بالنساء ضحايا العنف - المحكمة الابتدائية بسطات","Cellule d'accueil des femmes - TPI Settat","Women Support Unit - First Instance Court Settat"],r:5,c:"سطات / Settat",k:4,tel:"0523402015",addr:"شارع الحسن الثاني، سطات",h:"8:30 - 16:30",on:1},
  {id:"jad-hosp",n:["وحدة التكفل النفسي والاجتماعي - المستشفى الإقليمي محمد الخامس بالجديدة","Unité médico-sociale - Hôpital Mohammed V El Jadida","Medical & Social Care Unit - Mohammed V Hospital El Jadida"],r:5,c:"الجديدة / El Jadida",k:4,tel:"0523342334",addr:"شارع بئر أنزران، الجديدة",h:"24/24",on:1},

  // Region 6: Marrakech-Safi (مراكش-آسفي)
  {id:"rak-court",n:["خلية التكفل بالنساء ضحايا العنف - محكمة الاستئناف بمراكش","Cellule d'accueil des femmes - Cour d'Appel Marrakech","Support Unit for Women - Court of Appeal Marrakech"],r:6,c:"مراكش / Marrakech",k:4,tel:"0524430488",addr:"سيدي يوسف بن علي، مراكش",h:"8:30 - 16:30",on:1},
  {id:"rak-chui",n:["مصلحة الطب الشرعي والمستعجلات - المركز الاستشفائي الجامعي محمد السادس بمراكش","Service médico-légal et d'accueil d'urgence - CHU Mohammed VI Marrakech","Forensic Medicine & Emergency Care - CHU Marrakech"],r:6,c:"مراكش / Marrakech",k:4,tel:"0524300700",addr:"طريق ابن جرير، مراكش",h:"24/24",on:1},
  {id:"rak-fldf",n:["مركز النجدة لمناهضة العنف ضد النساء (FLDF مراكش)","Centre Annajda contre les violences (FLDF Marrakech)","Annajda Anti-violence Listening Center (FLDF Marrakech)"],r:6,c:"مراكش / Marrakech",k:3,tel:"0524446485",addr:"حي جليز، زنقة الإمام علي، مراكش",h:"9:00 - 17:00",on:1},
  {id:"saf-court",n:["خلية التكفل بالنساء والأطفال - المحكمة الابتدائية بآسفي","Cellule d'accueil - TPI Safi","Care Unit - First Instance Court Safi"],r:6,c:"آسفي / Safi",k:4,tel:"0524623145",addr:"شارع الرباط، آسفي",h:"8:30 - 16:30",on:1},
  {id:"ess-centre",n:["فضاء الاستماع وتوجيه النساء بمدينة الصويرة","Espace d'écoute et d'orientation des femmes - Essaouira","Listening & Guidance Space for Women - Essaouira"],r:6,c:"الصويرة / Essaouira",k:0,tel:"0524476020",addr:"باب دكالة، الصويرة",h:"8:30 - 16:30",on:1},

  // Region 7: Drâa-Tafilalet (درعة-تافيلالت)
  {id:"err-court",n:["خلية التكفل بالنساء ضحايا العنف - محكمة الاستئناف بالرشيدية","Cellule d'accueil des femmes victimes - Cour d'Appel Errachidia","Care Unit for Women - Court of Appeal Errachidia"],r:7,c:"الرشيدية / Errachidia",k:4,tel:"0535572210",addr:"شارع المسيرة الخضراء، الرشيدية",h:"8:30 - 16:30",on:1},
  {id:"err-hosp",n:["خلية العناية الصحية والاجتماعية - المستشفى الجهوي مولاي علي الشريف","Unité médico-sociale - Hôpital Régional Moulay Ali Chérif Errachidia","Medical-Social Unit - Moulay Ali Cherif Hospital Errachidia"],r:7,c:"الرشيدية / Errachidia",k:4,tel:"0535572012",addr:"الرشيدية المركز",h:"24/24",on:1},
  {id:"oua-court",n:["خلية التكفل بالنساء والأطفال - المحكمة الابتدائية بورزازات","Cellule d'accueil femmes & enfants - TPI Ouarzazate","Support Unit - First Instance Court Ouarzazate"],r:7,c:"ورزازات / Ouarzazate",k:4,tel:"0524882045",addr:"شارع محمد الخامس، ورزازات",h:"8:30 - 16:30",on:1},
  {id:"tin-entraide",n:["مركز الاستماع والدعم الاجتماعي بتنغير","Centre d'écoute et d'assistance sociale - Tinghir","Listening & Social Support Center - Tinghir"],r:7,c:"تنغير / Tinghir",k:0,tel:"0524834015",addr:"شارع بئر أنزران، تنغير",h:"8:30 - 16:30",on:1},

  // Region 8: Souss-Massa (سوس-ماسة)
  {id:"aga-court",n:["خلية التكفل بالنساء ضحايا العنف - محكمة الاستئناف بأكادير","Cellule d'accueil des femmes - Cour d'Appel Agadir","Women Support Unit - Court of Appeal Agadir"],r:8,c:"أكادير / Agadir",k:4,tel:"0528840245",addr:"شارع الجنرال الكتاني، أكادير",h:"8:30 - 16:30",on:1},
  {id:"aga-hosp",n:["وحدة الطب الشرعي وحماية الضحايا - مستشفى الحسن الثاني بأكادير","Unité médico-légale et de prise en charge - Hôpital Hassan II Agadir","Forensic & Patient Protection Unit - Hassan II Hospital Agadir"],r:8,c:"أكادير / Agadir",k:4,tel:"0528841477",addr:"شارع الحسن الثاني، تالبورجت، أكادير",h:"24/24",on:1},
  {id:"aga-voix",n:["مركز الاستماع والدعم القانوني - صوت المرأة الأمازيغية والجنوب","Centre d'écoute et de conseil juridique - Voix de la Femme Souss","Listening & Legal Counseling Center - Souss Women Voice"],r:8,c:"أكادير / Agadir",k:3,tel:"0528822010",addr:"شارع المقاومة، عمارة السلام، أكادير",h:"9:00 - 17:00",on:1},
  {id:"inz-court",n:["خلية التكفل بالنساء والأطفال - المحكمة الابتدائية بإنزكان","Cellule d'accueil - TPI Inezgane","Care Unit - First Instance Court Inezgane"],r:8,c:"إنزكان / Inezgane",k:4,tel:"0528833010",addr:"شارع المختار السوسي، إنزكان",h:"8:30 - 16:30",on:1},
  {id:"tar-entraide",n:["دار المواطن وخلية مساندة النساء بتارودانت","Centre social et d'écoute - Taroudant","Citizen House & Women Support Unit - Taroudant"],r:8,c:"تارودانت / Taroudant",k:0,tel:"0528852314",addr:"باب الزركان، تارودانت",h:"8:30 - 16:30",on:1},

  // Region 9: Guelmim-Oued Noun (كلميم-واد نون)
  {id:"gue-court",n:["خلية التكفل بالنساء ضحايا العنف - محكمة الاستئناف بكلميم","Cellule d'accueil des femmes victimes - Cour d'Appel Guelmim","Care Unit for Women - Court of Appeal Guelmim"],r:9,c:"كلميم / Guelmim",k:4,tel:"0528872010",addr:"شارع محمد السادس، كلميم",h:"8:30 - 16:30",on:1},
  {id:"gue-hosp",n:["خلية المساعدة الطبية والاجتماعية - المستشفى الجهوي بكلميم","Unité médico-sociale - Hôpital Régional Guelmim","Medical & Social Assistance Unit - Regional Hospital Guelmim"],r:9,c:"كلميم / Guelmim",k:4,tel:"0528873025",addr:"حي المطار، كلميم",h:"24/24",on:1},
  {id:"tan-court",n:["خلية التكفل بالنساء والأطفال - المحكمة الابتدائية بطانطان","Cellule d'accueil femmes & enfants - TPI Tan-Tan","Care Unit - First Instance Court Tan-Tan"],r:9,c:"طانطان / Tan-Tan",k:4,tel:"0528878020",addr:"شارع الحسن الثاني، طانطان",h:"8:30 - 16:30",on:1},
  {id:"ifn-entraide",n:["فضاء التوجيه والإدماج الاجتماعي بسيدي إفني","Espace d'orientation et d'écoute - Sidi Ifni","Referral & Listening Center - Sidi Ifni"],r:9,c:"سيدي إفني / Sidi Ifni",k:0,tel:"0528876110",addr:"شارع الحرية، سيدي إفني",h:"8:30 - 16:30",on:1},

  // Region 10: Laâyoune-Sakia El Hamra (العيون-الساقية الحمراء)
  {id:"lay-court",n:["خلية التكفل بالنساء ضحايا العنف - محكمة الاستئناف بالعيون","Cellule d'accueil des femmes victimes - Cour d'Appel Laâyoune","Women Victims Care Unit - Court of Appeal Laayoune"],r:10,c:"العيون / Laâyoune",k:4,tel:"0528892550",addr:"شارع مكة، العيون",h:"8:30 - 16:30",on:1},
  {id:"lay-hosp",n:["وحدة الفحص الطبي والاجتماعي - مستشفى الحسن بن المهدي بالعيون","Unité médico-sociale d'urgence - Hôpital Hassan Ben Mehdi Laâyoune","Emergency Medical & Social Unit - Hassan Ben Mehdi Hospital Laayoune"],r:10,c:"العيون / Laâyoune",k:4,tel:"0528893040",addr:"شارع القدس، العيون",h:"24/24",on:1},
  {id:"lay-centre",n:["مركز الإصغاء والإرشاد الأسري - الاتحاد الوطني لنساء المغرب بالعيون","Centre d'écoute et de conseil familial - UNFM Laâyoune","Listening & Family Counseling Center - UNFM Laayoune"],r:10,c:"العيون / Laâyoune",k:5,tel:"0528894120",addr:"حي المسيرة، قرب دار الشباب، العيون",h:"9:00 - 17:00",on:1},
  {id:"bou-court",n:["خلية التكفل بالمحكمة الابتدائية بالمرسى / بوجدور","Cellule d'accueil des victimes - TPI Boujdour","Victims Care Unit - First Instance Court Boujdour"],r:10,c:"بوجدور / Boujdour",k:4,tel:"0528896015",addr:"شارع الحسن الثاني، بوجدور",h:"8:30 - 16:30",on:1},
  {id:"sma-entraide",n:["مركز التكفل بالنساء في وضعية صعبة بالسمارة","Centre d'assistance aux femmes vulnérables - Smara","Support Center for Vulnerable Women - Smara"],r:10,c:"السمارة / Smara",k:0,tel:"0528899010",addr:"حي السلام، السمارة",h:"8:30 - 16:30",on:1},

  // Region 11: Dakhla-Oued Ed-Dahab (الداخلة-وادي الذهب)
  {id:"dak-court",n:["خلية التكفل بالنساء ضحايا العنف - المحكمة الابتدائية بوادي الذهب","Cellule d'accueil des femmes victimes - TPI Oued Ed-Dahab Dakhla","Women Care Unit - First Instance Court Dakhla"],r:11,c:"الداخلة / Dakhla",k:4,tel:"0528897030",addr:"شارع محمد الخامس، الداخلة",h:"8:30 - 16:30",on:1},
  {id:"dak-hosp",n:["خلية العناية الطبية والمواكبة الاجتماعية - المركز الاستشفائي الجهوي الحسن الثاني","Unité médico-sociale - Hôpital Régional Hassan II Dakhla","Medical & Social Care Unit - Hassan II Regional Hospital Dakhla"],r:11,c:"الداخلة / Dakhla",k:4,tel:"0528897444",addr:"شارع المسيرة، الداخلة",h:"24/24",on:1},
  {id:"dak-entraide",n:["فضاء الاستماع ومواكبة الفتيات والنساء بالداخلة (التعاون الوطني)","Espace d'écoute et d'accompagnement - Entraide Nationale Dakhla","Listening & Guidance Space for Women - Entraide Nationale Dakhla"],r:11,c:"الداخلة / Dakhla",k:0,tel:"0528898115",addr:"حي السلام، الداخلة",h:"8:30 - 16:30",on:1}
];
let IM=[0,1,2,3,4].map(i=>({v:"",ty:i==2?0:0}));
const CF={e:"contact@aman.ma",p:"",w:""}; // البريد · الهاتف · واتساب
let LM="";
const esc=x=>String(x).replace(/[&<>"']/g,c=>"&#"+c.charCodeAt(0)+";");
function cif(){const a=[];if(CF.e)a.push(`<a href="mailto:${esc(CF.e)}">${esc(CF.e)}</a>`);if(CF.p)a.push(`<a href="tel:${esc(CF.p)}">${esc(CF.p)}</a>`);if(CF.w)a.push(`<a href="https://wa.me/${esc(CF.w.replace(/\D/g,""))}" target="_blank" rel="noopener">WhatsApp</a>`);return a.length?a.join(" · "):t("ci")}
const nums=()=>{const l=ts("num");return `<div class="em nums"><div class="nums-head"><div><h3>${t("numT")}</h3><span class="nums-badge">${['مجانية 24/24','Gratuit 24h/24','Free 24/7'][L]}</span></div><button type="button" class="btn-voice-read" onclick="amanSpeakText(['أرقام النجدة والاستماع بالمغرب: 19 للشرطة في المدينة، 177 للدرك الملكي في القرى، 8350 خط الاستماع المجاني للاتحاد الوطني لنساء المغرب، و15 للوقاية المدنية والإسعاف.','Numéros d\\'urgence au Maroc : 19 Police, 177 Gendarmerie, 8350 écoute gratuite UNFM, 15 Ambulance.','Morocco Emergency Numbers: 19 Police, 177 Gendarmerie, 8350 Free UNFM Helpline, 15 Ambulance.'][L], this)" aria-label="${['استمعي للأرقام بالصوت','Écouter les numéros','Listen to numbers'][L]}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg><span>${['استمعي بالصوت','Écouter','Listen'][L]}</span></button></div><div class="num-g">${["19","177","8350","15"].map((x,i)=>`<a href="tel:${x}" class="num-t num-${x}" aria-label="${l[i]} ${x}"><div class="num-t-body"><svg class="num-ic" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.04 1.17 2 2 0 012 .01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg><b dir="ltr">${x}</b></div><span>${l[i]}</span></a>`).join("")}</div><p class="num-n">${t("numN")}</p></div>`};
function done(f,s){let m="AMAN\n";[...f.querySelectorAll("label[for]")].forEach((l,i)=>{const v=f["f"+i];if(v&&v.value.trim())m+=l.textContent+": "+v.value.trim()+"\n"});LM=m;const q=encodeURIComponent(m);let h=t("ok")+"<br>";if(CF.e)h+=`<a class="btn d" href="mailto:${encodeURIComponent(CF.e)}?subject=AMAN&body=${q}">${t("viaE")}</a>`;if(CF.w)h+=`<a class="btn d" target="_blank" rel="noopener" href="https://wa.me/${CF.w.replace(/\D/g,"")}?text=${q}">WhatsApp</a>`;h+=`<button type="button" class="btn o" style="color:var(--ac);border-color:var(--ac)" onclick="navigator.clipboard&&navigator.clipboard.writeText(LM);this.innerHTML='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>'">${t("cp")}</button>`;if(!CF.e&&!CF.w)h+=`<br><small>${t("nocf")}</small>`;s.innerHTML=h}
function qxt(){const d=document.getElementById("drw");if(d)d.style.display="none";}
const IC={community:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",account:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",home:"M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6zM9 12l2 2 4-4",safety:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",ai:"M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4zm0 10c4.42 0 8 2.24 8 5v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1c0-2.76 3.58-5 8-5zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm7-4l2-2m-2 2l2 2m-16-4l-2-2m2 2l-2 2",digital:"M3 5h7a2 2 0 012 2v13a2 2 0 00-2-2H3zM21 5h-7a2 2 0 00-2 2v13a2 2 0 012-2h7z",dir:"M4 21V9l8-5 8 5v12M9 21v-5h6v5M8 12h1M12 12h1M16 12h1",academy:"M9 11a3 3 0 100-6 3 3 0 000 6zM3 20c0-3 3-5 6-5s6 2 6 5M17 11a2.5 2.5 0 100-5M16 15c3 0 5 2 5 5",safe:"M2 11l4-4 5 1 3-2 5 3 3 2M6 7l-4 4 4 4M22 13l-4 4M18 17l-3 3-3-3M14 8l-4 4a2 2 0 003 3l3-2",guide:"M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",impact:"M12 4v16M7 20h10M5 7h14M5 7l-3 7a3 3 0 006 0zM19 7l-3 7a3 3 0 006 0z",contact:"M5 4h4l2 5-2.500 1.500a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z",more:"M5 12h.01M12 12h.01M19 12h.01"};
const ic=n=>`<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${IC[n]||IC.home}"/></svg>`;
let PRE="",DP=null;
window.amanDeferredPrompt=null;
function rg(i){PRE=i;location.hash="dir"}

function amanGetDeviceInfo(){
  const ua=(navigator.userAgent||"")+" "+(navigator.vendor||"");
  const isIOS=/iPad|iPhone|iPod/.test(ua)||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1);
  const isAndroid=/Android/i.test(ua);
  const isWindows=/Windows/i.test(ua);
  const isMac=/Macintosh|Mac OS X/i.test(ua)&&!isIOS;
  const isLinux=/Linux/i.test(ua)&&!isAndroid;
  const isStandalone=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===true||(document.referrer&&document.referrer.includes("android-app://"));
  const isChrome=/Chrome|CriOS/i.test(ua)&&!/Edge|Edg|OPR/i.test(ua);
  const isSafari=/Safari/i.test(ua)&&!/Chrome|CriOS|Edge|Edg|OPR/i.test(ua);
  const isEdge=/Edge|Edg/i.test(ua);
  const isFirefox=/Firefox|FxiOS/i.test(ua);
  const isSamsung=/SamsungBrowser/i.test(ua);

  let osName=["هاتف ذكي / لوحي","Appareil mobile","Smart Device"][L];
  if(isIOS)osName=/iPad/.test(ua)?"iPad (Apple iOS)":"iPhone (Apple iOS)";
  else if(isAndroid)osName="Android (أندرويد)";
  else if(isWindows)osName="Windows PC (كمبيوتر)";
  else if(isMac)osName="Apple Mac (ماك)";
  else if(isLinux)osName="Linux PC";

  let browserName="Web Browser";
  if(isSamsung)browserName="Samsung Internet";
  else if(isChrome)browserName="Google Chrome";
  else if(isSafari)browserName="Apple Safari";
  else if(isEdge)browserName="Microsoft Edge";
  else if(isFirefox)browserName="Mozilla Firefox";

  return {isIOS,isAndroid,isWindows,isMac,isLinux,isStandalone,isChrome,isSafari,isEdge,isFirefox,isSamsung,osName,browserName};
}

function amanShowToast(msg,type){
  type=type||"info";
  let el=document.getElementById("aman-toast");
  if(!el){
    el=document.createElement("div");
    el.id="aman-toast";
    el.className="aman-toast";
    el.setAttribute("role","status");
    el.setAttribute("aria-live","polite");
    document.body.appendChild(el);
  }
  el.className="aman-toast aman-toast-"+type+" show";
  el.textContent=msg;
  clearTimeout(window._amanToastTimer);
  window._amanToastTimer=setTimeout(()=>{el.classList.remove("show")},4500);
}

function amanTriggerInstall(){
  const dev=amanGetDeviceInfo();
  if(dev.isStandalone){
    amanShowToast(
      ["تطبيق أمان مثبت ويعمل بنظام التطبيق الكامل المستقل (PWA) على جهازك ✓",
       "L'application AMAN est déjà installée et active en mode autonome (PWA) ✓",
       "AMAN app is already installed and running in standalone PWA mode ✓"][L],
      "success"
    );
    return;
  }
  if(window.amanDeferredPrompt){
    window.amanDeferredPrompt.prompt();
    window.amanDeferredPrompt.userChoice.then(choice=>{
      if(choice&&choice.outcome==="accepted"){
        amanShowToast(
          ["جاري تثبيت تطبيق أمان على جهازك...",
           "Installation d'AMAN sur votre écran d'accueil en cours...",
           "Installing AMAN to your home screen..."][L],
          "success"
        );
      }
      window.amanDeferredPrompt=null;
      DP=null;
      amanUpdatePwaUi();
      if(route()==="install")draw();
    });
    return;
  }
  if(dev.isIOS){
    amanOpenIosInstallModal();
    return;
  }
  amanOpenDesktopInstallGuideModal();
}

function inst(){amanTriggerInstall()}

function amanOpenIosInstallModal(){
  let modal=document.getElementById("aman-ios-install-modal");
  if(!modal){
    modal=document.createElement("div");
    modal.id="aman-ios-install-modal";
    modal.className="aman-modal-overlay";
    document.body.appendChild(modal);
  }
  const isAr=L===0,isFr=L===1;
  modal.innerHTML=`
    <div class="aman-modal-box aman-pwa-modal-box" role="dialog" aria-modal="true">
      <div class="aman-modal-head">
        <div style="display:flex;align-items:center;gap:10px">
          <img src="icon-192.png" alt="AMAN" width="40" height="40" style="border-radius:12px">
          <div>
            <h3 style="margin:0">${isAr?"تثبيت أمان على الآيفون والآيباد":(isFr?"Installer AMAN sur iPhone / iPad":"Install AMAN on iPhone / iPad")}</h3>
            <small class="muted">Apple iOS · Safari</small>
          </div>
        </div>
        <button type="button" class="btn-close-modal" onclick="amanCloseIosInstallModal()" aria-label="إغلاق">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>

      <div class="aman-pwa-steps-body">
        <p style="margin:0 0 16px;font-size:.95rem;line-height:1.6">
          ${isAr?"على أجهزة آبل (Apple)، يتم التثبيت مباشرة من متصفح سفاري بخطوات بسيطة:":(isFr?"Sur Apple iOS, installez l’application facilement via le menu Partager de Safari :":"On Apple iOS, install AMAN via Safari’s Share menu in 3 simple steps:")}
        </p>

        <div class="aman-pwa-step-card">
          <div class="aman-step-num">1</div>
          <div class="aman-step-content">
            <b>${isAr?"اضغطي على زر المشاركة (Share)":(isFr?"Appuyez sur le bouton Partager":"Tap the Share button")}</b>
            <p>${isAr?"ستجدين أيقونة المربع مع السهم للأعلى <b>[↑]</b> في شريط الأدوات أسفل شاشة الآيفون (أو بالأعلى في الآيباد).":(isFr?"L’icône carrée avec une flèche vers le haut <b>[↑]</b> dans la barre Safari.":"The box with an arrow pointing up <b>[↑]</b> in Safari’s toolbar.")}</p>
            <div class="aman-ios-share-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007AFF" stroke-width="2.2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
              <span>${isAr?"أيقونة المشاركة في سفاري [↑]":(isFr?"Bouton Partager Safari [↑]":"Safari Share icon [↑]")}</span>
            </div>
          </div>
        </div>

        <div class="aman-pwa-step-card">
          <div class="aman-step-num">2</div>
          <div class="aman-step-content">
            <b>${isAr?"اختاري «إضافة إلى الصفحة الرئيسية»":(isFr?"Sélectionnez « Sur l’écran d’accueil »":"Select \"Add to Home Screen\"")}</b>
            <p>${isAr?"مرري القائمة لأسفل حتى تجدي خيار <b>«إضافة إلى الصفحة الرئيسية»</b> (رمز المربع مع علامة +).":(isFr?"Faites défiler le menu et choisissez <b>« Sur l’écran d’accueil »</b>.":"Scroll down and tap <b>\"Add to Home Screen\"</b>.")}</p>
            <div class="aman-ios-share-badge">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="4"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
              <span>${isAr?"Sur l’écran d’accueil / إضافة إلى الصفحة الرئيسية":"Sur l’écran d’accueil"}</span>
            </div>
          </div>
        </div>

        <div class="aman-pwa-step-card">
          <div class="aman-step-num">3</div>
          <div class="aman-step-content">
            <b>${isAr?"انقري على «إضافة» (Ajouter / Add)":(isFr?"Appuyez sur « Ajouter »":"Tap \"Add\"")}</b>
            <p>${isAr?"في الزاوية العليا، اضغطي على زر <b>«إضافة»</b> لتثبيت أيقونة AMAN فوراً على شاشة هاتفك.":(isFr?"En haut à droite de l’écran, validez en cliquant sur « Ajouter ».":"At the top right corner, tap \"Add\" to finalize installation.")}</p>
          </div>
        </div>

        <div class="aman-pwa-notice-box">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2a9d8f" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <span>${isAr?"سيعمل التطبيق بدون إنترنت وسيتصرف كتطبيق رسمي سريع ومحمي.":(isFr?"L’application sera accessible hors-ligne directement depuis votre écran.":"The app will work fully offline directly from your home screen.")}</span>
        </div>
      </div>

      <div class="aman-modal-foot">
        <button type="button" class="btn d" style="width:100%" onclick="amanCloseIosInstallModal()">
          ${isAr?"فهمت، شكراً":(isFr?"J’ai compris":"Got it, thanks")}
        </button>
      </div>
    </div>
  `;
  modal.style.display="flex";
}

function amanCloseIosInstallModal(){
  const m=document.getElementById("aman-ios-install-modal");
  if(m)m.style.display="none";
}

function amanOpenDesktopInstallGuideModal(){
  let modal=document.getElementById("aman-desktop-install-modal");
  if(!modal){
    modal=document.createElement("div");
    modal.id="aman-desktop-install-modal";
    modal.className="aman-modal-overlay";
    document.body.appendChild(modal);
  }
  const isAr=L===0,isFr=L===1;
  modal.innerHTML=`
    <div class="aman-modal-box aman-pwa-modal-box" role="dialog" aria-modal="true">
      <div class="aman-modal-head">
        <div style="display:flex;align-items:center;gap:10px">
          <img src="icon-192.png" alt="AMAN" width="40" height="40" style="border-radius:12px">
          <div>
            <h3 style="margin:0">${isAr?"تثبيت أمان على الكمبيوتر":(isFr?"Installer AMAN sur ordinateur":"Install AMAN on Computer")}</h3>
            <small class="muted">Windows · macOS · Linux</small>
          </div>
        </div>
        <button type="button" class="btn-close-modal" onclick="amanCloseDesktopInstallGuideModal()" aria-label="إغلاق">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>

      <div class="aman-pwa-steps-body">
        <div class="aman-pwa-step-card">
          <div class="aman-step-num">1</div>
          <div class="aman-step-content">
            <b>${isAr?"أيقونة التثبيت في شريط العنوان":(isFr?"Icône dans la barre d’adresse":"Address bar install icon")}</b>
            <p>${isAr?"انظري إلى أقصى يمين شريط العنوان (URL bar) أعلى المتصفح، واضغطي على أيقونة التثبيت <b>(شاشة كمبيوتر مع سهم لأسفل)</b>.":(isFr?"Cliquez sur l’icône d’installation à droite de la barre d’adresse.":"Click the install icon on the right edge of the address bar.")}</p>
          </div>
        </div>

        <div class="aman-pwa-step-card">
          <div class="aman-step-num">2</div>
          <div class="aman-step-content">
            <b>${isAr?"أو عبر قائمة خيارات المتصفح":(isFr?"Ou via le menu du navigateur":"Or via the browser menu")}</b>
            <p>${isAr?"اضغطي على النقاط الثلاث <b>[⋮]</b> في الزاوية العلوية ثم اختاري <b>«تثبيت منصة أمان...»</b> (Install AMAN).":(isFr?"Ouvrez le menu [⋮] puis choisissez « Installer AMAN ».":"Open menu [⋮] then select \"Install AMAN\".")}</p>
          </div>
        </div>

        <div class="aman-pwa-notice-box">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2a9d8f" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <span>${isAr?"سيتم إنشاء تطبيق مستقل على جهازك يفتح في نافذة نظيفة بدون شريط المتصفح ويعمل بدون إنترنت.":(isFr?"AMAN fonctionnera dans une fenêtre dédiée avec accès hors-ligne.":"AMAN will run in a dedicated distraction-free window with offline access.")}</span>
        </div>
      </div>

      <div class="aman-modal-foot">
        <button type="button" class="btn d" style="width:100%" onclick="amanCloseDesktopInstallGuideModal()">
          ${isAr?"إغلاق":(isFr?"Fermer":"Close")}
        </button>
      </div>
    </div>
  `;
  modal.style.display="flex";
}

function amanCloseDesktopInstallGuideModal(){
  const m=document.getElementById("aman-desktop-install-modal");
  if(m)m.style.display="none";
}

function amanUpdatePwaUi(){
  const dev=amanGetDeviceInfo();
  const isAr=L===0,isFr=L===1;

  const btn=document.getElementById("hd-install-btn");
  if(btn){
    if(dev.isStandalone){
      btn.classList.add("is-standalone");
      btn.innerHTML=`<svg class="ic" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2a9d8f" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span class="pwa-txt">${isAr?"مثبت":(isFr?"Installé":"Installed")}</span>`;
      btn.title=isAr?"تطبيق أمان مثبت ويعمل بنظام PWA":"Application installée";
    }else{
      btn.classList.remove("is-standalone");
      btn.innerHTML=`<svg class="ic" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg><span class="pwa-txt">${isAr?"تثبيت":(isFr?"Installer":"Install")}</span>`;
      btn.title=isAr?"تثبيت تطبيق أمان على جهازك":(isFr?"Installer l'application AMAN":"Install AMAN app");
    }
  }

  const drwInstall=document.getElementById("drw-install-action");
  if(drwInstall){
    drwInstall.innerHTML=dev.isStandalone
      ? `<span style="color:#2a9d8f;display:inline-flex;align-items:center;gap:6px"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> ${isAr?"التطبيق مثبت ✓":(isFr?"App installée ✓":"Installed ✓")}</span>`
      : `<span style="display:inline-flex;align-items:center;gap:6px"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> ${isAr?"تثبيت تطبيق أمان":(isFr?"Installer AMAN":"Install AMAN")}</span>`;
  }
}

function amanCheckFloatingInstallBanner(){
  const dev=amanGetDeviceInfo();
  if(dev.isStandalone)return;
  try{
    if(sessionStorage.getItem("aman-dismiss-pwa-banner")==="1")return;
  }catch(e){return;}
  if(document.getElementById("aman-floating-pwa-banner"))return;

  setTimeout(()=>{
    try{
      if(sessionStorage.getItem("aman-dismiss-pwa-banner")==="1")return;
    }catch(e){return;}
    if(document.getElementById("aman-floating-pwa-banner"))return;

    const isAr=L===0,isFr=L===1;
    const banner=document.createElement("aside");
    banner.id="aman-floating-pwa-banner";
    banner.className="aman-floating-pwa-banner";
    banner.setAttribute("role","region");
    banner.setAttribute("aria-label",isAr?"تثبيت التطبيق":"Installation");

    banner.innerHTML=`
      <div class="aman-float-banner-inner">
        <img src="icon-192.png" alt="AMAN" width="42" height="42" class="aman-float-icon">
        <div class="aman-float-content">
          <b>${isAr?"تثبيت أمان على هذا الجهاز":(isFr?"Installer AMAN sur cet appareil":"Install AMAN on this device")}</b>
          <p>${isAr?"تطبيق خفيف يعمل أوفلاين للوصول الفوري للطوارئ والدعم في أي وقت.":(isFr?"Application légère active hors-ligne pour un accès SOS immédiat.":"Lightweight app with offline support for instant SOS emergency access.")}</p>
        </div>
        <div class="aman-float-actions">
          <button type="button" class="btn d aman-float-install-btn" onclick="amanTriggerInstall()">
            ${isAr?"تثبيت":(isFr?"Installer":"Install")}
          </button>
          <button type="button" class="aman-float-close-btn" onclick="amanDismissFloatingBanner()" aria-label="إغلاق">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(banner);
  },4000);
}

function amanDismissFloatingBanner(){
  try{sessionStorage.setItem("aman-dismiss-pwa-banner","1");}catch(e){}
  const b=document.getElementById("aman-floating-pwa-banner");
  if(b){
    b.classList.add("fade-out");
    setTimeout(()=>b.remove(),400);
  }
}

window.addEventListener("beforeinstallprompt",e=>{
  e.preventDefault();
  window.amanDeferredPrompt=e;
  DP=e;
  amanUpdatePwaUi();
  if(route()==="install")draw();
});

window.addEventListener("appinstalled",()=>{
  window.amanDeferredPrompt=null;
  DP=null;
  amanUpdatePwaUi();
  amanShowToast(["تم تثبيت تطبيق أمان بنجاح على هذا الجهاز ✓","L'application AMAN a été installée avec succès ✓","AMAN app was installed successfully ✓"][L],"success");
  if(route()==="install")draw();
});

const route=()=>(location.hash.slice(1)||"home");
function setL(v){L=+v;try{localStorage.setItem("aman-l",["ar","fr","en"][L])}catch(e){}draw();amanThemeUI()}
function amanIsDark(){const a=document.documentElement.getAttribute("data-theme");return a?a==="dark":!!(window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches)}
function amanThemeUI(){const d=amanIsDark(),h=document.documentElement;h.classList.toggle("is-dark",d);const b=document.getElementById("theme-btn");if(b){const lb=d?["الوضع النهاري","Mode jour","Day mode"][L]:["الوضع الليلي","Mode nuit","Night mode"][L];b.setAttribute("aria-label",lb);b.title=lb;b.setAttribute("aria-pressed",d?"true":"false")}const m=document.querySelector('meta[name="theme-color"]');if(m)m.content=d?"#1a0d24":"#4B176F"}
function amanToggleTheme(){const n=amanIsDark()?"light":"dark";document.documentElement.setAttribute("data-theme",n);try{localStorage.setItem("aman-theme",n)}catch(e){}amanThemeUI()}
try{matchMedia("(prefers-color-scheme: dark)").addEventListener("change",amanThemeUI)}catch(e){}
amanThemeUI();
function amanLangUI(){const b=document.getElementById("lg-b");if(!b)return;b.querySelector(".lg-full").textContent=["العربية","Français","English"][L];b.querySelector(".lg-code").textContent=["AR","FR","EN"][L];b.setAttribute("aria-label",["اللغة","Langue","Language"][L]+": "+["العربية","Français","English"][L]);document.querySelectorAll("#lg-m [data-l]").forEach(x=>{const on=+x.dataset.l===L;x.classList.toggle("on",on);x.setAttribute("aria-checked",on)})}
function ddClose(ex){document.querySelectorAll(".dd.open").forEach(d=>{if(d!==ex){d.classList.remove("open");const b=d.querySelector(".dd-b");b&&b.setAttribute("aria-expanded","false")}})}
document.addEventListener("click",e=>{const b=e.target.closest(".dd-b");if(b){const d=b.closest(".dd"),o=!d.classList.contains("open");ddClose(d);d.classList.toggle("open",o);b.setAttribute("aria-expanded",o);if(o){const f=d.querySelector(".dd-m .on,.dd-m [role^=menuitem]");f&&f.focus({preventScroll:true})}return}const li=e.target.closest("#lg-m [data-l]");if(li){ddClose();setL(li.dataset.l);document.getElementById("lg-b").focus();return}if(e.target.closest(".dd-m a")){ddClose();return}if(!e.target.closest(".dd"))ddClose()});
document.addEventListener("keydown",e=>{const d=document.querySelector(".dd.open");if(!d)return;if(e.key==="Escape"){ddClose();d.querySelector(".dd-b").focus();return}if(e.key==="ArrowDown"||e.key==="ArrowUp"){const it=[...d.querySelectorAll(".dd-m [role^=menuitem]")];if(!it.length)return;e.preventDefault();let i=it.indexOf(document.activeElement);i=e.key==="ArrowDown"?(i+1)%it.length:(i-1+it.length)%it.length;it[i].focus()}});
document.addEventListener("focusin",e=>{if(!e.target.closest(".dd.open"))ddClose()});
function drw(o){document.getElementById("drw").style.display=o?"block":"none"}
function amanRenderFooter() {
  const quickLinks = [
    { k: "home", l: ["الرئيسية", "Accueil", "Home"] },
    { k: "community", l: ["مجتمع أمان", "Communauté", "Community"] },
    { k: "ai", l: ["مستشارك الذكي", "Conseiller IA", "AI Advisor"] },
    { k: "dir", l: ["دليل التكفل", "Annuaire d'aide", "Directory"] },
    { k: "laws", l: ["القانون 103-13", "Loi 103-13", "Law 103-13"] },
    { k: "safe", l: ["المؤسسة الآمنة", "Institution sûre", "Safe Institution"] },
    { k: "contact", l: ["اتصال", "Contact", "Contact"] },
    { k: "account", l: ["حسابي", "Mon compte", "Account"] }
  ];

  return `
  <div class="ft-wrap">
    <!-- Top Institutional Identity & Hotlines Row -->
    <div class="ft-top">
      <div class="ft-brand">
        <img src="${LG}" alt="شعار أمان" class="ft-logo" width="46" height="46" loading="lazy">
        <div class="ft-brand-info">
          <span class="ft-kingdom">${['المملكة المغربية', 'Royaume du Maroc', 'Kingdom of Morocco'][L]}</span>
          <h2 class="ft-title">AMAN · أمان</h2>
          <p class="ft-desc">${['المنصة الوطنية للوقاية من العنف ضد النساء والفتيات', 'Plateforme nationale de prévention des violences faites aux femmes', 'National Platform for Prevention of Violence Against Women'][L]}</p>
        </div>
      </div>

      <!-- Emergency Hotlines Strip (Official, Prominent, Simple) -->
      <div class="ft-hotlines">
        <span class="ft-hotlines-label">${['أرقام النجدة الرسمية (مجانية 24/24):', 'Numéros d\'urgence officiels (24h/24) :', 'Official Emergency Numbers (24/7):'][L]}</span>
        <div class="ft-hotlines-pills">
          <a href="tel:19" class="ft-pill" title="${['الشرطة (الأمن الوطني)', 'Police', 'Police'][L]}">
            <b>19</b> <span>${['الشرطة', 'Police', 'Police'][L]}</span>
          </a>
          <a href="tel:177" class="ft-pill" title="${['الدرك الملكي', 'Gendarmerie', 'Gendarmerie'][L]}">
            <b>177</b> <span>${['الدرك الملكي', 'Gendarmerie', 'Gendarmerie'][L]}</span>
          </a>
          <a href="tel:8350" class="ft-pill highlight" title="${['الرقم الأخضر الوطني للإصغاء (UNFM)', 'Ligne verte UNFM', 'UNFM Helpline'][L]}">
            <b>8350</b> <span>${['خط الاستماع UNFM', 'Écoute UNFM', 'UNFM Helpline'][L]}</span>
          </a>
          <a href="tel:15" class="ft-pill" title="${['الوقاية المدنية والإسعاف', 'Protection civile', 'Ambulance'][L]}">
            <b>15</b> <span>${['الإسعاف', 'Ambulance', 'Ambulance'][L]}</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Middle Simple Navigation Strip -->
    <nav class="ft-nav" aria-label="${['روابط المنصة', 'Navigation', 'Links'][L]}">
      ${quickLinks.map(item => `<a href="#${item.k}">${item.l[L]}</a>`).join('<span class="ft-sep">·</span>')}
    </nav>

    <!-- Bottom Official Copyright & Notice -->
    <div class="ft-bottom">
      <p class="ft-legal">
        ${['منصة اجتماعية وتضامنية وطنية استناداً لمقتضيات القانون 103-13 ومبادئ حماية المعطيات الشخصية (CNDP). تصفح آمن وسري 100%.', 'Dispositif national de prévention selon la loi 103-13 et principes CNDP. Navigation 100% sécurisée et confidentielle.', 'National solidarity platform under Law 103-13 & CNDP principles. 100% secure & confidential.'][L]}
      </p>
      <div class="ft-copy-row">
        <span>© ${new Date().getFullYear()} AMAN (أمان) · ${['المملكة المغربية · جميع الحقوق محفوظة', 'Royaume du Maroc · Tous droits réservés', 'Kingdom of Morocco · All rights reserved'][L]}</span>
        <a href="mailto:contact@aman.ma" class="ft-contact-link">contact@aman.ma</a>
      </div>
    </div>
  </div>`;
}

function chrome(){
  const d=document.documentElement;
  d.lang=["ar","fr","en"][L];
  d.dir=L?"ltr":"rtl";
  const r=route();
  amanLangUI();

  // Desktop Main Nav Tabs
  const NP=["home","dir","safety","ai","guide","community"];
  const NM=NAV.filter(k=>!NP.includes(k)&&k!=="install");
  const mOn=NM.includes(r);
  const dnEl=document.getElementById("dn");
  if(dnEl){
    dnEl.innerHTML=NP.map(k=>`<a href="#${k}" class="${r==k?"on":""}"${r==k?' aria-current="page"':""}>${t(k)}</a>`).join("")+
      `<div class="dd nav-more"><button type="button" class="dd-b${mOn?" on":""}" aria-haspopup="true" aria-expanded="false">${["المزيد","Plus","More"][L]}<svg class="ic dd-chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button><div class="dd-m" role="menu">${NM.map(k=>`<a role="menuitem" href="#${k}" class="${r==k?"on":""}">${t(k)}</a>`).join("")}</div></div>`;
  }

  // 5-Tab Ergonomic Mobile Bottom Nav (Home, Dir, Center SOS, AI, Community)
  const bnEl=document.getElementById("bn");
  if(bnEl){
    bnEl.innerHTML=`
      <a href="#home" class="${r=="home"?"on":""}"${r=="home"?' aria-current="page"':""}>
        <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${IC.home}"/></svg>
        <span>${t("home")}</span>
      </a>
      <a href="#dir" class="${r=="dir"?"on":""}"${r=="dir"?' aria-current="page"':""}>
        <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${IC.dir}"/></svg>
        <span>${t("dir")}</span>
      </a>
      <button type="button" class="bn-sos-btn" onclick="amanOpenSosModal()" aria-label="طوارئ SOS">
        <div class="bn-sos-circle">
          <svg class="ic" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        </div>
        <span>SOS</span>
      </button>
      <a href="#ai" class="${r=="ai"?"on":""}"${r=="ai"?' aria-current="page"':""}>
        <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${IC.ai}"/></svg>
        <span>${t("ai")}</span>
      </a>
      <a href="#community" class="${r=="community"?"on":""}"${r=="community"?' aria-current="page"':""}>
        <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${IC.community}"/></svg>
        <span>${t("community")}</span>
      </a>
    `;
  }

  // Header Account Button
  const ha=document.getElementById("hd-acc");
  if(ha){
    ha.classList.toggle("on",r=="account");
    ha.setAttribute("aria-label",t("account"));
    ha.title=t("account");
    let hs=ha.querySelector(".hd-acc-t");
    if(!hs){hs=document.createElement("span");hs.className="hd-acc-t";ha.appendChild(hs)}
    hs.textContent=t("account");
  }

  // Modern Structured Mobile Slide-in Drawer (#dl)
  const dlEl=document.getElementById("dl");
  if(dlEl){
    const isAr=L===0,isFr=L===1;
    dlEl.innerHTML=`
      <div class="drw-head">
        <div class="drw-brand">
          <img src="${LG}" alt="AMAN" class="drw-logo" width="36" height="36">
          <div>
            <b>AMAN · أمان</b>
            <small class="muted">${['المنصة الوطنية المغربية','Plateforme nationale','National Platform'][L]}</small>
          </div>
        </div>
        <button type="button" class="drw-close-btn" onclick="drw(0)" aria-label="إغلاق">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>

      <div class="drw-content-scroll">
        <!-- Section 1: Core Services -->
        <div class="drw-section">
          <span class="drw-sec-title">${['الخدمات الأساسية والمستعجلة','Services essentiels','Core Services'][L]}</span>
          <div class="drw-links-list">
            <a href="#home" class="drw-nav-item ${r=="home"?"on":""}" onclick="drw(0)">
              <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${IC.home}"/></svg>
              <span>${t("home")}</span>
            </a>
            <a href="#dir" class="drw-nav-item ${r=="dir"?"on":""}" onclick="drw(0)">
              <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${IC.dir}"/></svg>
              <span>${t("dir")}</span>
              <span class="drw-pill-badge">${ORG.length}</span>
            </a>
            <a href="#safety" class="drw-nav-item ${r=="safety"?"on":""}" onclick="drw(0)">
              <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${IC.safety}"/></svg>
              <span>${t("safety")}</span>
              <span class="drw-pill-badge" style="background:rgba(42,157,143,0.15);color:#2a9d8f">${['جديد','Nouveau','New'][L]}</span>
            </a>
            <a href="#ai" class="drw-nav-item ${r=="ai"?"on":""}" onclick="drw(0)">
              <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${IC.ai}"/></svg>
              <span>${t("ai")}</span>
            </a>
          </div>
        </div>

        <!-- Section 2: Protection & Legal -->
        <div class="drw-section">
          <span class="drw-sec-title">${['الحماية والشكايات والقوانين','Protection & Droits','Protection & Rights'][L]}</span>
          <div class="drw-links-list">
            <a href="#guide" class="drw-nav-item ${r=="guide"?"on":""}" onclick="drw(0)">
              <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${IC.guide}"/></svg>
              <span>${t("guide")}</span>
            </a>
            <a href="#laws" class="drw-nav-item ${r=="laws"?"on":""}" onclick="drw(0)">
              <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v18M5 7h14M3 15l2-8 2 8a3 3 0 0 1-4 0zM17 15l2-8 2 8a3 3 0 0 1-4 0zM8 21h8"/></svg>
              <span>${['القوانين وحقوقك (103-13)','Loi 103-13 et vos droits','Law 103-13 & Rights'][L]}</span>
            </a>
            <a href="#community" class="drw-nav-item ${r=="community"?"on":""}" onclick="drw(0)">
              <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${IC.community}"/></svg>
              <span>${t("community")}</span>
            </a>
          </div>
        </div>

        <!-- Section 3: Learning & Accessibility -->
        <div class="drw-section">
          <span class="drw-sec-title">${['التعلم والشمولية','Formation & Inclusion','Learning & Inclusion'][L]}</span>
          <div class="drw-links-list">
            <a href="#academy" class="drw-nav-item ${r=="academy"?"on":""}" onclick="drw(0)">
              <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${IC.academy}"/></svg>
              <span>${t("academy")}</span>
            </a>
            <a href="#digital" class="drw-nav-item ${r=="digital"?"on":""}" onclick="drw(0)">
              <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${IC.digital}"/></svg>
              <span>${t("digital")}</span>
            </a>
            <a href="#blind" class="drw-nav-item ${r=="blind"?"on":""}" onclick="drw(0)">
              <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
              <span>${['الوضع الصوتي (كفيفات)','Mode vocal (non-voyantes)','Voice Mode (Blind)'][L]}</span>
            </a>
            <a href="#sign" class="drw-nav-item ${r=="sign"?"on":""}" onclick="drw(0)">
              <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
              <span>${['لغة الإشارة (صم وبكم)','Langue des signes','Sign Language Studio'][L]}</span>
            </a>
          </div>
        </div>

        <!-- Section 4: Platform & Settings -->
        <div class="drw-section">
          <span class="drw-sec-title">${['المنصة والأمان','Plateforme & Sécurité','Platform & Safety'][L]}</span>
          <div class="drw-links-list">
            <a href="#account" class="drw-nav-item ${r=="account"?"on":""}" onclick="drw(0)">
              <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${IC.account}"/></svg>
              <span>${t("account")}</span>
            </a>
            <a href="#safe" class="drw-nav-item ${r=="safe"?"on":""}" onclick="drw(0)">
              <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${IC.safe}"/></svg>
              <span>${t("safe")}</span>
            </a>
            <a href="#qr" class="drw-nav-item ${r=="qr"?"on":""}" onclick="drw(0)">
              <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              <span>${t("qr")}</span>
            </a>
            <a href="#contact" class="drw-nav-item ${r=="contact"?"on":""}" onclick="drw(0)">
              <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${IC.contact}"/></svg>
              <span>${t("contact")}</span>
            </a>
          </div>
        </div>

        <!-- Quick Controls Bar -->
        <div class="drw-controls-box">
          <div class="drw-controls-row">
            <button type="button" class="btn o drw-ctrl-btn" onclick="amanToggleTheme()">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
              <span>${['الوضع الليلي / النهاري','Thème clair/sombre','Theme'][L]}</span>
            </button>
            <button type="button" class="btn o drw-ctrl-btn" onclick="drw(0);amanCamouflage()">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              <span>${['تمويه سريع','Camouflage','Disguise'][L]}</span>
            </button>
          </div>

          <div class="drw-lg-row" role="group" aria-label="Language">
            ${["العربية","Français","English"].map((n,i)=>`<button type="button" class="drw-lg-btn ${i==L?"on":""}" aria-pressed="${i==L}" onclick="setL(${i});drw(0)">${n}</button>`).join("")}
          </div>

          <div class="drw-install-box">
            <button type="button" id="drw-install-action" class="drw-install-btn" onclick="amanTriggerInstall();drw(0)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              <span>${['تثبيت تطبيق أمان (PWA)','Installer l’application AMAN','Install AMAN App'][L]}</span>
            </button>
          </div>

          <button type="button" class="drw-clear-session-btn" onclick="if(confirm(['مسح جميع بيانات الجلسة وسجل التصفح المحلي لحمايتك؟','Effacer les données de navigation locales ?','Clear local session data?'][L])){localStorage.clear();sessionStorage.clear();location.reload();}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            <span>${['مسح فوري لسجل التصفح المحلي','Effacer les données locales','Clear local browsing data'][L]}</span>
          </button>
        </div>
      </div>
    `;
  }

  {
    const P=[["aman","جمعية أمان – AMAN"],["unfm","الاتحاد الوطني لنساء المغرب (UNFM)"],["onu-femmes","ONU Femmes / UN Women"],["cndh","المجلس الوطني لحقوق الإنسان (CNDH)"],["ministere-solidarite","وزارة التضامن والإدماج الاجتماعي والأسرة"],["adfm","الجمعية الديمقراطية لنساء المغرب (ADFM)"],["fldf","فدرالية رابطة حقوق النساء (FLDF)"],["uaf","اتحاد العمل النسائي (UAF)"],["amvef","AMVEF"],["justice","وزارة العدل – Ministère de la Justice"],["entraide","مؤسسة التعاون الوطني – Entraide Nationale"],["fm5","مؤسسة محمد الخامس للتضامن – Fondation Mohammed V"],["unfpa","صندوق الأمم المتحدة للسكان – UNFPA"],["unicef","اليونيسف – UNICEF Maroc"],["sante","وزارة الصحة والحماية الاجتماعية – Ministère de la Santé"],["cndp","اللجنة الوطنية لحماية المعطيات – CNDP"],["ministere-public","رئاسة النيابة العامة – Présidence du Ministère Public"],["dgsn","المديرية العامة للأمن الوطني – DGSN"],["education","وزارة التربية الوطنية والتعليم الأولي والتكوين المهني والتأهيل – Éducation Nationale"],["mediateur","مؤسسة وسيط المملكة – Médiateur du Royaume"],["commission-nationale","اللجنة الوطنية للتكفل بالنساء ضحايا العنف – Commission nationale pour la prise en charge des femmes victimes de violences"],["unhcr","المفوضية السامية للأمم المتحدة لشؤون اللاجئين – UNHCR"],["arab-feminist-network","الشبكة العربية للمجتمع المدني النسوي – Arab States Civil Society Organizations and Feminists Network"],["israr","تحالف إصرار للتمكين والمساواة – ISRAR Coalition"],["anaouat","مؤسسة النواة للحقوق والتنمية – Fondation Anaouat"],["al-bouraz","جمعية البوغاز للمرأة والطفل – Association Al Bouraz"],["voix-femmes","جمعية صوت – Voix, pour une vie digne et sans discrimination (Casablanca)"],["amna","AMNA"]];
    const one=h=>P.map(([f,n,s])=>f?`<span class="prt-i"${h?' aria-hidden="true"':''}><img src="partners/${f}.jpg" alt="${h?'':n}" loading="lazy" decoding="async"></span>`:`<span class="prt-i prt-x"${h?' aria-hidden="true"':''}><b>${s}</b><small>${n}</small></span>`).join("");
    document.getElementById("prtT").textContent=["شركاء محتملون","Partenaires potentiels","Potential partners"][L];
    document.getElementById("prtL").innerHTML=one(0)+one(1);
  }
  {
    document.getElementById("ft").innerHTML = amanRenderFooter();
  }
  document.querySelectorAll("[data-lg]").forEach(i=>i.src=LG);
  document.querySelectorAll("[data-mk]").forEach(i=>i.src=MK);
  const aiElem = document.getElementById("ai");
  if (aiElem) aiElem.href = AI;
  document.title="AMAN – أمان";
  amanUpdatePwaUi();
}
const dm=()=>`<span class="tag w">${t("demo")}</span>`;
function fld(id,labs,types){let h="";labs.forEach((l,i)=>{const n="f"+i,ty=(types[i]||"text");h+=`<label for="${id}${n}">${l}</label>`+(ty=="area"?`<textarea id="${id}${n}" name="${n}" rows="4" maxlength="1000"></textarea>`:`<input id="${id}${n}" name="${n}" type="${ty}" maxlength="200">`)});return h}
function form(id,labs,types,req,hint){return `<form onsubmit="return sub(event,'${id}','${req}')" novalidate class="card">${fld(id,labs,types)}${hint?`<p class="note">${t("hint")}</p>`:""}<input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true"><label><input type="checkbox" name="c"> ${t("cons")}</label><button class="btn d" style="margin-top:12px">${t("send")}</button><p class="ms" role="status" id="s-${id}"></p></form>`}
function sub(e,id,req){e.preventDefault();const f=e.target,s=document.getElementById("s-"+id);if(f.website.value)return false;let ok=f.c.checked;req.split(",").forEach(i=>{if(!f["f"+i].value.trim())ok=false});[...f.querySelectorAll("input[type=email]")].forEach(x=>{if(x.value&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(x.value))ok=false});s.textContent=ok?"":t("er");if(ok){done(f,s);f.reset()}return false}
function art(q,c){const a=ts("artsD"),cs=ts("cats");let h="";for(let i=0;i<3;i++){const ti=a[i*2],b=a[i*2+1];if(q&&!(ti+b).toLowerCase().includes(q.toLowerCase()))continue;h+=`<article class="card"><h3>${ti}</h3><p>${b}</p></article>`}return h||`<p>${t("empty")}</p>`}
function flt(){const q=(document.getElementById("q")||{}).value||"";document.getElementById("al").innerHTML=art(q)}

// Helper Functions for Directory and Safety Plan
window.amanQuickSelectRegion = function(idx) {
  const dr = document.getElementById("dr");
  if (dr) {
    dr.value = (dr.value == idx) ? "" : idx;
    dirList();
  }
};
window.amanResetDirFilters = function() {
  const dq = document.getElementById("dq"), dr = document.getElementById("dr"), dk = document.getElementById("dk");
  if (dq) dq.value = "";
  if (dr) dr.value = "";
  if (dk) dk.value = "";
  dirList();
};
window.amanShareOrg = function(name, tel, city) {
  if (navigator.share) {
    navigator.share({
      title: name,
      text: `${name} - ${city} (${tel}) · منصة أمان المغربية`,
      url: location.href.split('#')[0] + '#dir'
    }).catch(()=>{});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(`${name} - ${city} - هاتف: ${tel}`).then(() => {
      amanShowToast(["تم نسخ بيانات المؤسسة بنجاح ✓", "Coordonnées copiées ✓", "Details copied ✓"][L], "success");
    });
  }
};
window.amanToggleSafetyCheck = function(key) {
  try {
    const s = JSON.parse(localStorage.getItem("aman-safety-plan") || "{}");
    s[key] = !s[key];
    localStorage.setItem("aman-safety-plan", JSON.stringify(s));
    amanShowToast(["تم تحديث مخطط السلامة ✓", "Plan mis à jour ✓", "Plan updated ✓"][L], "success");
  } catch(e) {}
};
window.amanSaveSafetyPlan = function(e) {
  if (e && e.preventDefault) e.preventDefault();
  try {
    const s = JSON.parse(localStorage.getItem("aman-safety-plan") || "{}");
    const nameEl = document.getElementById("sp-trusted-name");
    const telEl = document.getElementById("sp-trusted-tel");
    const codeEl = document.getElementById("sp-secret-code");
    const havenEl = document.getElementById("sp-safe-haven");
    if (nameEl) s.trustedName = nameEl.value.trim();
    if (telEl) s.trustedTel = telEl.value.trim();
    if (codeEl) s.secretCode = codeEl.value.trim();
    if (havenEl) s.safeHaven = havenEl.value.trim();
    localStorage.setItem("aman-safety-plan", JSON.stringify(s));
    amanShowToast(["تم حفظ مخطط السلامة بنجاح ومشفر على جهازك فقط ✓", "Plan sauvegardé localement en sécurité ✓", "Safety plan saved locally & securely ✓"][L], "success");
  } catch(e) {}
  return false;
};
window.amanClearSafetyPlan = function() {
  if (confirm(["هل أنتِ متأكدة من رغبتك في مسح مخطط السلامة بالكامل لحمايتك؟", "Effacer complètement votre plan de sécurité personnel ?", "Completely clear your personal safety plan?"][L])) {
    try { localStorage.removeItem("aman-safety-plan"); } catch(e) {}
    if (route() === "safety") draw();
    amanShowToast(["تم مسح مخطط السلامة بنجاح ✓", "Plan de sécurité effacé ✓", "Safety plan cleared ✓"][L], "info");
  }
};

function dirList(){
  const dqEl = document.getElementById("dq"), drEl = document.getElementById("dr"), dkEl = document.getElementById("dk");
  const q = (dqEl ? dqEl.value : "").toLowerCase().trim();
  const r = drEl ? drEl.value : "";
  const k = dkEl ? dkEl.value : "";
  const cs = ts("cats");
  
  // Highlight active quick region pill
  document.querySelectorAll(".quick-reg-pill").forEach(p => {
    const isAct = r !== "" && p.dataset.r === r;
    const isAll = r === "" && p.dataset.r === "";
    p.classList.toggle("active", isAct || isAll);
    p.setAttribute("aria-pressed", isAct || isAll ? "true" : "false");
  });

  const list = ORG.filter(o => {
    if (!o.on) return false;
    if (r !== "" && String(o.r) !== String(r)) return false;
    if (k !== "" && String(o.k) !== String(k)) return false;
    if (!q) return true;
    const hay = ((o.n[L] || o.n[0]) + " " + o.c + " " + (o.addr || "") + " " + (o.tel || "")).toLowerCase();
    return hay.includes(q);
  });

  const countEl = document.getElementById("dir-count");
  if (countEl) {
    countEl.innerHTML = [
      `عرض <b>${list.length}</b> مركز تكفل ومساندة متاح بالمغرب`,
      `Affichage de <b>${list.length}</b> structure(s) au Maroc`,
      `Showing <b>${list.length}</b> support center(s) in Morocco`
    ][L];
  }

  const resEl = document.getElementById("dres");
  if (!resEl) return;
  if (!list.length) {
    resEl.innerHTML = `
      <div class="dir-empty-state card">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--mu)" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
        <p>${t("empty")}</p>
        <button type="button" class="btn o" onclick="amanResetDirFilters()">${['إعادة ضبط عوامل التصفية','Réinitialiser les filtres','Reset filters'][L]}</button>
      </div>
    `;
    return;
  }

  resEl.innerHTML = list.map(o => {
    const orgName = esc(o.n[L] || o.n[0]);
    const cleanTel = (o.tel || "").replace(/\D/g, "");
    return `
      <div class="card dir-card" id="org-${o.id}">
        <div class="dir-card-head">
          <div class="dir-badges">
            <span class="tag dir-cat-tag">${cs[o.k] || t("all")}</span>
            <span class="tag dir-verif-tag"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> ${t("verif")}</span>
          </div>
          <span class="dir-region-chip">${rn(o.r)}</span>
        </div>
        <h3 class="dir-card-title">${orgName}</h3>
        <div class="dir-meta-row">
          <div class="dir-meta-item">
            <svg class="ic" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>${esc(o.c)} ${o.addr ? '· ' + esc(o.addr) : ''}</span>
          </div>
          ${o.h ? `
          <div class="dir-meta-item">
            <svg class="ic" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>${esc(o.h)}</span>
          </div>` : ''}
        </div>
        <div class="dir-actions-row">
          <a href="tel:${cleanTel}" class="btn d btn-call-org" aria-label="${['اتصال هاتفي مباشر','Appel direct','Direct call'][L]}: ${cleanTel}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.04 1.17 2 2 0 012 .01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>
            <b dir="ltr">${esc(o.tel)}</b>
            <span>${['اتصال الآن','Appeler','Call now'][L]}</span>
          </a>
          <button type="button" class="btn o btn-share-org" onclick="amanShareOrg('${esc(orgName)}','${cleanTel}','${esc(o.c)}')" title="${['مشاركة أو نسخ الرقم','Partager ou copier','Share or copy'][L]}" aria-label="${['مشاركة','Partager','Share'][L]}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
          </button>
        </div>
      </div>
    `;
  }).join("");
}
const P={
home(){
  const programs = [
    { k: "safety", label: t("safety"), desc: ['خطة أمان شخصية تفاعلية، إعداد حقيبة الطوارئ، وجهة الاتصال والكلمة السرية.','Plan de sécurité personnel, sac d’urgence et contact de confiance.','Personal safety plan, emergency go-bag, and trusted code phrase.'][L], ic: IC.safety },
    { k: "dir", label: t("dir"), desc: ['دليل وطني يشمل أكثر من 40 خلية تكفل ومستشفى وجمعية عبر جهات المغرب الـ12.','Annuaire de plus de 40 cellules de prise en charge et hôpitaux dans 12 régions.','Directory of 40+ care units, hospitals, and NGOs across 12 regions.'][L], ic: IC.dir },
    { k: "guide", label: t("guide"), desc: ['كيفية إعداد الشكايات الرسمية ومساطر حماية الضحايا بالمحاكم.','Orientation, préparation de plainte et démarches judiciaires.','Guidance, complaint drafting, and judicial court procedures.'][L], ic: IC.guide },
    { k: "laws", label: ['القوانين (103-13)', 'Lois & Droits', 'Laws & Rights'][L], desc: ['نصوص القانون 103-13، تجريم العنف، أوامر الحماية، والطرد من بيت الزوجية.','Loi 103-13, incriminations, ordonnances de protection et droits.','Moroccan Law 103-13, protection orders, and marital home rights.'][L], ic: "M12 3v18M5 7h14M3 15l2-8 2 8a3 3 0 0 1-4 0zM17 15l2-8 2 8a3 3 0 0 1-4 0zM8 21h8" },
    { k: "digital", label: t("digital"), desc: t("pd"), ic: IC.digital },
    { k: "academy", label: t("academy"), desc: t("pa"), ic: IC.academy }
  ];
  const h = ts("hs");

  return `
  <!-- Hero Section with Distinct Visual Priority -->
  <section class="hero">
    <svg class="wv" viewBox="0 0 400 46" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 40C120 5 260 50 400 10V46H0z" fill="#F4B942" opacity=".85"/>
      <path d="M0 46C140 20 270 46 400 24V46z" fill="var(--bg)"/>
    </svg>
    <img class="hl" alt="AMAN" src="${LG}">
    <h1>${t("slogan")}</h1>
    <p class="hero-intro">${t("intro")}</p>
    <div class="hero-actions">
      <a class="btn hero-cta-primary" href="#ai">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4M8 16h.01M16 16h.01"/></svg>
        <span>${t("ai")}</span>
        <span class="hero-badge">${['استشارة سرية 24/7','Conseil confidentiel','Confidential advice'][L]}</span>
      </a>
      <a class="btn o hero-cta-secondary" href="#safety">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${IC.safety}"/></svg>
        <span>${t("safety")}</span>
      </a>
      <a class="btn o hero-cta-secondary" href="#dir">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>${t("c1")}</span>
      </a>
      <button type="button" class="btn o hero-voice-btn" onclick="amanSpeakText('${esc(t("intro"))}', this)">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
        <span>${['استمعي للترحيب بالصوت','Écouter la présentation','Listen to intro'][L]}</span>
      </button>
    </div>
  </section>

  <!-- Emergency 4-Hotlines Bar -->
  ${nums()}

  <!-- Modern Quick Access Hub (الأدوات الأساسية المنظمة في كروت خفيفة) -->
  <section class="aman-quick-hub" aria-label="${['أدوات الولوج والخدمات الخاصة','Outils d\'accès et services','Quick Access Hub'][L]}">
    <div class="hub-header">
      <div class="hub-tag">
        <svg class="ic" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4zm0 10c4.42 0 8 2.24 8 5v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1c0-2.76 3.58-5 8-5z"/></svg>
        <span>${['ولوج شامل ومساندة مخصصة','Inclusion & Accès Rapide','Universal Fast Access'][L]}</span>
      </div>
      <h2>${['خدمات الدعم المتخصصة والمتاحة للجميع','Services spécialisés et accessibles à toutes','Specialized accessible services'][L]}</h2>
    </div>

    <div class="hub-grid">
      <a href="#safety" class="hub-card hub-safety" aria-label="${t("safety")}">
        <div class="hub-card-top">
          <div class="hub-icon-wrap" style="background:rgba(42,157,143,0.14);color:#2a9d8f">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="${IC.safety}"/></svg>
          </div>
          <span class="hub-action-arrow" aria-hidden="true">&larr;</span>
        </div>
        <div class="hub-card-body">
          <h3>${t("safety")}</h3>
          <p>${['مخطط شخصي تفاعلي لحماية نفسك والاستجابة للخطر','Plan personnel interactif de protection d’urgence','Interactive personal safety & emergency plan'][L]}</p>
        </div>
      </a>

      <a href="#blind" class="hub-card hub-voice" aria-label="${['الوضع الصوتي للمكفوفات','Mode vocal non-voyantes','Voice Mode for the Blind'][L]}">
        <div class="hub-card-top">
          <div class="hub-icon-wrap ic-voice">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
          </div>
          <span class="hub-action-arrow" aria-hidden="true">&larr;</span>
        </div>
        <div class="hub-card-body">
          <h3>${['الوضع الصوتي (كفيفات)','Mode vocal (non-voyantes)','Voice Mode (Blind)'][L]}</h3>
          <p>${['استماع وتوجيه بالدارجة المغربية بدون لمس الشاشة','Guidage vocal en Darija sans toucher l\'écran','Voice guidance in Darija without screen touch'][L]}</p>
        </div>
      </a>

      <a href="#sign" class="hub-card hub-sign" aria-label="${['استوديو لغة الإشارة للصم والبكم','Studio langue des signes','Sign Language Studio'][L]}">
        <div class="hub-card-top">
          <div class="hub-icon-wrap ic-sign">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
          </div>
          <span class="hub-action-arrow" aria-hidden="true">&larr;</span>
        </div>
        <div class="hub-card-body">
          <h3>${['لغة الإشارة (صم وبكم)','Langue des signes','Sign Language Studio'][L]}</h3>
          <p>${['كاميرا ذكية ورصد إشارة النجدة العالمية الصامتة','Caméra intelligente et signal SOS silencieux','Smart camera and universal silent SOS signal'][L]}</p>
        </div>
      </a>

      <a href="#community" class="hub-card hub-comm" aria-label="${['مجتمع أمان التضامني','Communauté solidaire','AMAN Community'][L]}">
        <div class="hub-card-top">
          <div class="hub-icon-wrap ic-comm">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <span class="hub-action-arrow" aria-hidden="true">&larr;</span>
        </div>
        <div class="hub-card-body">
          <h3>${['مجتمع أمان التضامني','Communauté solidaire','AMAN Community'][L]}</h3>
          <p>${['فضاء سري وتضامني للمساندة وتبادل التجارب بأمان','Espace confidentiel et solidaire d\'entraide','Safe anonymous peer support and solidarity space'][L]}</p>
        </div>
      </a>
    </div>
  </section>

  <!-- Simplified Darija Hub: Easy comprehension for ANY user regardless of background -->
  <section class="aman-simplified-hub" aria-label="${['دليل الفهم السريع بالدارجة المغربية','Guide simplifié en Darija','Quick Simplified Darija Guide'][L]}">
    <div class="simplified-header">
      <div class="simplified-badge">
        <span>🗣️ ${['شرح مبسط بالدارجة المغربية (فهمي دغيا)','Explications simplifiées en Darija','Simplified Darija Explanations'][L]}</span>
      </div>
      <button type="button" class="btn-audio-pill" onclick="amanSpeakText(['أختي الكريمة، هادي أهم الحقوق والإجراءات بالدارجة: أولاً، إلا تعرضتي للضرب أو الجرح، سيري نيشان للمستعجلات وطلبي شهادة طبية ITT، ومن بعد ديري شكاية عند البوليس 19 أو الجندارم 177. ثانياً، إلا هددوك بنشر تصاورك فالهاتف، ما تعطيش الفلوس وسكريني المحادثات وسيري لفرقة الجرائم الإلكترونية راه كيحبسوه حتى لـ 3 سنين. ثالثاً، باغية تفرقي ومشاكلك كثيرة؟ طلاق الشقاق كديريه بوحدك فالمحكمة، والنفقة والحضانة من حقك وحق وليداتك. رابعاً، إلا طردك من دار الزوجية، وكيل الملك كيرجعك بقوة القانون.', 'Explications des droits en Darija marocaine accessible à toutes.', 'Simplified Moroccan Darija guide for easy access.'][L], this)">
        <svg class="ic" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
        <span>${['استمعي للشرح كامل بالصوت','Écouter les explications','Listen to audio guide'][L]}</span>
      </button>
    </div>
    <h3 class="simplified-title">${['حقوقك وإجراءاتك فـ 4 خطوات واضحة وسهلة وبلا تعقيد','Vos démarches essentielles en 4 points simples','Your key steps in 4 simple points'][L]}</h3>
    <p class="simplified-intro">${['ما كاين حتى تعقيد: ضغطي على زر «اسمعي» فكل بطاقة لسماع الشرح بالصوت بالدارجة المغربية:','Des explications claires et directes avec lecture vocale en Darija pour chaque situation :','Clear and direct explanations with voice reading for every situation:'][L]}</p>

    <div class="simplified-cards-grid">
      <!-- Card 1: Physical assault & hospital certificate -->
      <div class="simp-card">
        <div class="simp-card-top">
          <div class="simp-icon-wrap" style="background:rgba(239,35,60,0.12);color:#ef233c">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
          </div>
          <button type="button" class="btn-simp-read" onclick="amanSpeakText('إلا ضربك أو جرحك: سيري دغيا للمستعجلات فالسبيطار العمومي، وطلبي شهادة طبية ITT كتبين الضرب وشحال دالعجز، راها فابور، ومن بعد ديري شكاية عند البوليس 19 أو الجندارم 177.', this)">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            <span>${['اسمعي','Écouter','Listen'][L]}</span>
          </button>
        </div>
        <h3>${['1. إلا كان ضرب أو اعتداء جسدي','1. En cas d’agression physique','1. Physical assault'][L]}</h3>
        <p>${['سيري فوراً للمستعجلات فالسبيطار، طلبي شهادة طبية (ITT) تبين مدة العجز (راها فابور)، ومن بعد حطي شكاية فالبوليس (19) أو الجيدارم (177).','Urgences médicales + certificat ITT constatant les blessures + plainte au 19 ou 177.','Go to hospital emergency + get ITT medical certificate + file complaint at 19/177.'][L]}</p>
        <div class="simp-card-actions">
          <a href="#laws" class="simp-link">${['شوفي تفاصيل الشهادة ITT','Détails du certificat','Certificate details'][L]} &larr;</a>
        </div>
      </div>

      <!-- Card 2: Cyber-extortion & photo blackmail -->
      <div class="simp-card">
        <div class="simp-card-top">
          <div class="simp-icon-wrap" style="background:rgba(2,132,199,0.12);color:#0284c7">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          </div>
          <button type="button" class="btn-simp-read" onclick="amanSpeakText('إلا هدّدك بنشر تصاورك ولا فيديوهاتك ففيسبوك ولا واتساب: ما تعطيه حتى فرانك! سكريني المحادثات والتصاور والنمرة، وبلوكي الحساب، وسيري ديريكت للبوليس فرقة الجرائم الإلكترونية راه كيحبسوه حتى لـ 3 سنين.', this)">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            <span>${['اسمعي','Écouter','Listen'][L]}</span>
          </button>
        </div>
        <h3>${['2. إلا هدّدك بنشر التصاور فالهاتف','2. Chantage aux photos privées','2. Photo blackmail'][L]}</h3>
        <p>${['ما تعطيه حتى ريال! سكريني المحادثات والنمرة، وبلوكي الحساب، وسيري لفرقة محاربة الجريمة الإلكترونية فالكوميسارية (الفصل 447 كيحبسو حتى لـ 3 سنين).','Ne payez rien ! Sauvegardez les captures d’écran et déposez plainte pour cybercriminalité (Art. 447).','Do not pay! Take screenshots and file cybercrime complaint (Art. 447).'][L]}</p>
        <div class="simp-card-actions">
          <a href="#digital" class="simp-link">${['خطوات حماية التيليفون','Sécuriser le téléphone','Secure your phone'][L]} &larr;</a>
        </div>
      </div>

      <!-- Card 3: Divorce, Alimony, Custody -->
      <div class="simp-card">
        <div class="simp-card-top">
          <div class="simp-icon-wrap" style="background:rgba(5,150,105,0.12);color:#059669">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1zM2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1zM7 21h10M12 3v18M3 7h18"/></svg>
          </div>
          <button type="button" class="btn-simp-read" onclick="amanSpeakText('باغية تفرقي ومعندكش مشاكل؟ طلاق الشقاق كديريه فمحكمة الأسرة بوحدك وبلا موافقة ديالو. وليداتك كيبقاو معاك فالحضانة بقوة القانون، والنفقة وسكنى لوليدات واجبة عليه يخلصها كل شهر.', this)">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            <span>${['اسمعي','Écouter','Listen'][L]}</span>
          </button>
        </div>
        <h3>${['3. الطلاق، النفقة، وحضانة لوليدات','3. Divorce, pension et garde des enfants','3. Divorce, alimony & custody'][L]}</h3>
        <p>${['طلاق الشقاق كديريه فالمحكمة بوحدك وبلا موافقة منو. الحضانة كتبقى ليك بقوة القانون، والنفقة وسكنى لوليدات واجبة ومفروضة عليه كل شهر.','Divorce pour discorde (Chiqaq) accessible sans accord préalable. Garde prioritaire à la mère et pension obligatoire.','Discord divorce filed directly. Custody priority to mother and mandatory monthly alimony.'][L]}</p>
        <div class="simp-card-actions">
          <a href="#guide" class="simp-link">${['دليل مسطرة المحكمة','Guide des procédures','Court procedures guide'][L]} &larr;</a>
        </div>
      </div>

      <!-- Card 4: Expulsion & Free Legal Aid -->
      <div class="simp-card">
        <div class="simp-card-top">
          <div class="simp-icon-wrap" style="background:rgba(138,67,167,0.14);color:#8A43A7">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </div>
          <button type="button" class="btn-simp-read" onclick="amanSpeakText('إلا جرّا عليك من الدار ولا بدّل القفل: سيري عند وكيل الملك بالمحكمة أو للكوميسارية، وكيل الملك كيرجعك لدارك فوراً بالقوة العمومية. ومعندكش باش تخلصي محامي؟ فالمحكمة كيعطيوك محامي يدافع عليك فابور من صندوق المساعدة القضائية.', this)">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            <span>${['اسمعي','Écouter','Listen'][L]}</span>
          </button>
        </div>
        <h3>${['4. إلا طردك من الدار + محامي فابور','4. Expulsion du foyer + Avocat gratuit','4. Eviction + Free Lawyer'][L]}</h3>
        <p>${['ممنوع يخرجك لزنقة: وكيل الملك كيرجعك لدارك فوراً بقوة القانون 103-13. وإلا معندكش مدخول، طلب المساعدة القضائية كيعطيك محامي فابور بلا متخلصي حتى ريال.','Expulsion interdite : réintégration par le Parquet (Loi 103-13). Assistance judiciaire gratuite pour avoir un avocat sans frais.','Illegal eviction: Prosecutor enforces return under Law 103-13. Free legal aid provides a lawyer at no cost.'][L]}</p>
        <div class="simp-card-actions">
          <a href="#ai" class="simp-link">${['سولي مستشارك الذكي','Demander à l’assistant','Ask smart advisor'][L]} &larr;</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Core Specialized Programs (6 Clean Pillars) -->
  <section class="aman-section">
    <div class="section-head">
      <h2>${t("progs")}</h2>
      <p class="section-sub">${['خدمات ومسارات متكاملة للمساندة والوقاية والحماية بالمغرب','Parcours complets de prévention, protection et accompagnement','Comprehensive prevention and protection pathways in Morocco'][L]}</p>
    </div>
    <div class="grid aman-programs-grid">
      ${programs.map(item => `
        <a class="card aman-prog-card" href="#${item.k}">
          <div class="prog-icon-badge">
            <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${item.ic}"/></svg>
          </div>
          <h3>${item.label}</h3>
          <p>${item.desc}</p>
          <span class="prog-link-pill">${['الدخول للخدمة','Accéder','Access service'][L]} &larr;</span>
        </a>
      `).join("")}
    </div>
  </section>

  <!-- 3-Step Simple Pathway -->
  <section class="aman-section">
    <div class="section-head">
      <h2>${t("how")}</h2>
    </div>
    <div class="grid aman-steps-grid">
      ${[0, 2, 4].map((i, idx) => `
        <div class="card aman-step-card">
          <div class="step-num-pill">${idx + 1}</div>
          <h3>${h[i]}</h3>
          <p>${h[i + 1]}</p>
        </div>
      `).join("")}
    </div>
  </section>

  <!-- Privacy, Camouflage & Institutional Trust -->
  <section class="aman-trust-card">
    <div class="trust-icon-box">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2a9d8f" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
    </div>
    <div class="trust-body">
      <h3>${['خصوصيتك وأمانك مضمونان 100%','Confidentialité et sécurité absolues 100%','100% Confidentiality & Safety Guarantee'][L]}</h3>
      <p>${['تصفحك مشفر ومحمي. طبقاً للقانون رقم 103-13 ومعايير اللجنة الوطنية CNDP، لا يتم تسجيل أي معطيات تكشف هويتك دون رغبتك. يمكنك في أي لحظة الضغط على زر التمويه السريع لحماية شاشتك فوراً.','Navigation entièrement chiffrée. Conforme à la loi 103-13 et aux normes CNDP. Activez le camouflage rapide à tout moment pour masquer immédiatement votre écran.','Fully encrypted browsing compliant with Law 103-13 and CNDP guidelines. Activate quick camouflage anytime to immediately mask your screen.'][L]}</p>
    </div>
    <div class="trust-action">
      <button type="button" class="btn-trust-camo" onclick="amanCamouflage()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        <span>${['تجربة التمويه السريع','Tester le camouflage','Test Camouflage'][L]}</span>
      </button>
    </div>
  </section>
  `;
},
safety(){
  let s = {};
  try { s = JSON.parse(localStorage.getItem("aman-safety-plan") || "{}"); } catch(e) {}
  const isAr = L === 0, isFr = L === 1;

  const bagItems = [
    { k: "bag_cin", l: ["بطاقة التعريف الوطنية (CIN) ودفتر العائلة أو عقود الازدياد", "Carte d'identité (CIN) et livret de famille", "National ID (CIN) and family record book"] },
    { k: "bag_keys", l: ["نسخة احتياطية من مفاتيح المنزل ومفاتيح العمل/السيارة", "Double des clés du domicile et travail/voiture", "Spare keys to home and work/car"] },
    { k: "bag_cash", l: ["مبلغ مالي نقدي احتياطي للطوارئ والتنقل السريع", "Argent liquide de secours pour transport immédiat", "Emergency spare cash for immediate transit"] },
    { k: "bag_meds", l: ["الأدوية الأساسية لكِ ولأطفالك مع الوصفات الطبية", "Médicaments essentiels et ordonnances", "Essential medicines and prescriptions for you & kids"] },
    { k: "bag_phone", l: ["شاحن هاتف محمول / بطارية شحن احتياطية (Powerbank)", "Chargeur de téléphone portable / batterie externe", "Phone charger / power bank"] },
    { k: "bag_cert", l: ["أي شواهد طبية (ITT) أو محاضر أو وثائق إثبات سابقة", "Certificats médicaux (ITT) ou procès-verbaux antérieurs", "Prior medical certificates (ITT) or evidence documents"] },
    { k: "bag_paper", l: ["ورقة مكتوب عليها أرقام هواتف موثوقة (في حال نفاد بطارية الهاتف)", "Numéros utiles notés sur papier en cas de panne de batterie", "Paper with trusted phone numbers written down in case battery dies"] }
  ];

  return `
    <div class="safety-plan-wrap">
      <div class="safety-hero card">
        <div class="safety-hero-badge">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4"/></svg>
          <span>${isAr ? 'أداة حماية شخصية مشفرة' : (isFr ? 'Outil de protection chiffré' : 'Encrypted personal tool')}</span>
        </div>
        <h2>${t("safety")}</h2>
        <p class="safety-intro">${t("safetySub")}</p>
        <div class="safety-alert-strip">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <span>${isAr ? 'خطة السلامة تُحفظ محلياً على جهازك فقط ولا تُرسل لأي خادم. يمكنك طباعتها أو مسحها في أي وقت بنقرة واحدة.' : (isFr ? 'Ce plan reste exclusivement sur votre appareil et n’est jamais envoyé. Imprimez ou effacez-le d’un clic.' : 'This plan stays strictly on your device and is never sent anywhere. Print or clear it anytime.')}</span>
        </div>
      </div>

      <!-- Quick 4 Hotlines -->
      ${nums()}

      <!-- Step 1: Emergency Go-Bag Checklist -->
      <section class="card safety-step-card" id="sp-bag">
        <div class="sp-step-head">
          <div class="sp-step-badge">1</div>
          <div>
            <h3>${isAr ? 'حقيبة الطوارئ والاستعداد المسبق' : (isFr ? 'Sac d’urgence et préparatifs' : 'Emergency Go-Bag Checklist')}</h3>
            <p class="muted">${isAr ? 'حقيبة خفيفة مخبأة في مكان آمن أو لدى صديقة موثوقة تحتوي على الضروريات:' : (isFr ? 'Un sac discret confié à un proche de confiance avec les indispensables :' : 'A discreet bag kept in a safe place or with a trusted ally containing essentials:')}</p>
          </div>
        </div>
        <div class="safety-checklist">
          ${bagItems.map(item => `
            <label class="safety-check-item">
              <input type="checkbox" ${s[item.k] ? 'checked' : ''} onchange="amanToggleSafetyCheck('${item.k}')">
              <span>${item.l[L]}</span>
            </label>
          `).join("")}
        </div>
      </section>

      <!-- Step 2: Trusted Contact & Secret Codeword -->
      <section class="card safety-step-card" id="sp-contact">
        <div class="sp-step-head">
          <div class="sp-step-badge">2</div>
          <div>
            <h3>${isAr ? 'جهة الاتصال الموثوقة والكلمة السرية' : (isFr ? 'Contact de confiance & Mot de code' : 'Trusted Ally & Secret Codeword')}</h3>
            <p class="muted">${isAr ? 'شخص تثقين به تماماً يمكنك تنبيهه دون إثارة الشكوك باستخدام كلمة سر متفق عليها مسبقاً:' : (isFr ? 'Une personne de confiance que vous pouvez alerter discrètement avec un mot de passe convenu :' : 'Someone you trust completely who will understand an alert without raising suspicion:')}</p>
          </div>
        </div>
        <form onsubmit="return amanSaveSafetyPlan(event)" class="safety-form">
          <div class="form-row-2">
            <div>
              <label for="sp-trusted-name">${isAr ? 'اسم جهة الاتصال الموثوقة:' : (isFr ? 'Nom du contact de confiance :' : 'Trusted contact name:')}</label>
              <input id="sp-trusted-name" type="text" placeholder="${isAr ? 'مثال: أختي فاطمة، صديقتي مريم' : (isFr ? 'Ex: Ma sœur Fatima' : 'e.g. Sister Fatima')}" value="${esc(s.trustedName || '')}">
            </div>
            <div>
              <label for="sp-trusted-tel">${isAr ? 'رقم الهاتف:' : (isFr ? 'Numéro de téléphone :' : 'Phone number:')}</label>
              <input id="sp-trusted-tel" type="tel" dir="ltr" placeholder="06XXXXXXXX" value="${esc(s.trustedTel || '')}">
            </div>
          </div>
          <div class="form-row-2" style="margin-top:12px">
            <div>
              <label for="sp-secret-code">${isAr ? 'الكلمة السرية المتفق عليها:' : (isFr ? 'Mot de passe secret :' : 'Secret code phrase:')}</label>
              <input id="sp-secret-code" type="text" placeholder="${isAr ? 'مثال: «واش وصل الطرد؟» تعني: اتصلي بالشرطة فوراً' : (isFr ? 'Ex: « Le colis est arrivé ? » = Appel police' : 'e.g. \"Did the package arrive?\" = Call police')}" value="${esc(s.secretCode || '')}">
            </div>
            <div>
              <label for="sp-safe-haven">${isAr ? 'الملاذ الآمن ومكان اللجوء:' : (isFr ? 'Lieu refuge sécurisé :' : 'Safe haven / shelter:')}</label>
              <input id="sp-safe-haven" type="text" placeholder="${isAr ? 'مثال: منزل الوالدة، مركز الشرطة القريب' : (isFr ? 'Ex: Maison des parents, commissariat' : 'e.g. Parents home, nearby police')}" value="${esc(s.safeHaven || '')}">
            </div>
          </div>
          <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap">
            <button type="submit" class="btn d">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>${isAr ? 'حفظ البيانات محلياً' : (isFr ? 'Enregistrer localement' : 'Save locally')}</span>
            </button>
            ${s.trustedTel ? `<a href="tel:${esc(s.trustedTel.replace(/\D/g,''))}" class="btn o" style="color:#2a9d8f;border-color:#2a9d8f"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.04 1.17 2 2 0 012 .01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg> <span>${isAr ? 'اتصال بالشخص الموثوق' : (isFr ? 'Appeler' : 'Call')}</span></a>` : ''}
          </div>
        </form>
      </section>

      <!-- Step 3: Crisis Reflexes & Fast Escape Action -->
      <section class="card safety-step-card" id="sp-reflexes">
        <div class="sp-step-head">
          <div class="sp-step-badge">3</div>
          <div>
            <h3>${isAr ? 'ردود الفعل الوقائية أثناء اندلاع الخطر' : (isFr ? 'Réflexes d’urgence en cas d’agression' : 'Emergency Crisis Reflexes')}</h3>
            <p class="muted">${isAr ? 'قواعد ذهبية لحماية سلامتك الجسدية فوراً عند تصاعد التوتر أو التهديد:' : (isFr ? 'Règles essentielles pour votre protection physique immédiate :' : 'Essential rules to protect your physical safety during escalation:')}</p>
          </div>
        </div>
        <div class="grid safety-reflexes-grid">
          <div class="safety-reflex-box">
            <b style="color:var(--red)">${isAr ? 'تجنبي الأماكن المحاصرة:' : (isFr ? 'Évitez les pièces piégées :' : 'Avoid trapped rooms:')}</b>
            <p>${isAr ? 'ابتعدي فوراً عن المطبخ (لوجود السكاكين والأدوات الحادة) وعن الحمام (لغياب مخارج للهروب وكثرة الأسطح الصلبة).' : (isFr ? 'Éloignez-vous de la cuisine (couteaux, objets tranchants) et de la salle de bain (aucun moyen de fuite).' : 'Stay away from kitchen (knives, sharp objects) and bathroom (no exit, hard surfaces).')}</p>
          </div>
          <div class="safety-reflex-box">
            <b style="color:#2a9d8f">${isAr ? 'اختاري غرفة بها مخرج أو نافذة:' : (isFr ? 'Privilégiez les issues :' : 'Stay close to an exit:')}</b>
            <p>${isAr ? 'تحركي نحو غرفة قريبة من باب الخروج أو بها نافذة تطل على الشارع لطلب نجدة الجيران أو المارة.' : (isFr ? 'Rapprochez-vous de la porte de sortie ou d’une fenêtre donnant sur la rue pour alerter.' : 'Move towards an exit door or street-facing window to call for help.')}</p>
          </div>
          <div class="safety-reflex-box">
            <b style="color:var(--p)">${isAr ? 'أبقي الهاتف معكِ ومشحوناً:' : (isFr ? 'Gardez votre téléphone chargé :' : 'Keep phone charged:')}</b>
            <p>${isAr ? 'احفظي رقم 19 ورقم 177 في الاتصال السريع، واجعلي كلمة السر جاهزة للإرسال في رسالة قصيرة سريعة.' : (isFr ? 'Enregistrez le 19 et le 177 en numéro abrégé et préparez votre message de secours.' : 'Keep 19 and 177 on speed-dial, and your secret codeword ready to SMS.')}</p>
          </div>
          <div class="safety-reflex-box">
            <b style="color:#d97706">${isAr ? 'حماية الأطفال:' : (isFr ? 'Sécurité des enfants :' : 'Protect children:')}</b>
            <p>${isAr ? 'علّمي أطفالكِ عدم التدخل في الشجار، بل التوجه فوراً لغرفة آمنة أو لبيت الجيران والاتصال بالشرطة (19).' : (isFr ? 'Apprenez aux enfants à ne pas intervenir et à se réfugier chez un voisin sûr pour appeler le 19.' : 'Teach children not to intervene, but to head to a safe room or trusted neighbor and call 19.')}</p>
          </div>
        </div>
      </section>

      <!-- Action Footer: Print, Camouflage, Clear -->
      <div class="card safety-actions-bar">
        <div class="safety-actions-info">
          <h4>${isAr ? 'إدارة وحماية مخططك' : (isFr ? 'Gestion de votre plan' : 'Manage your plan')}</h4>
          <p class="muted">${isAr ? 'لحمايتك إذا كنتِ تخافين من تفتيش هاتفك، يمكنك طباعة الخطة ومسحها فوراً من المتصفح.' : (isFr ? 'Pour votre sécurité, vous pouvez imprimer ce plan puis effacer immédiatement les données.' : 'For your safety, you can print this plan and erase it immediately from the browser.')}</p>
        </div>
        <div class="safety-actions-btns">
          <button type="button" class="btn d np" onclick="window.print()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
            <span>${t("pr1")}</span>
          </button>
          <button type="button" class="btn o" onclick="amanCamouflage()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            <span>${['تمويه سريع للشاشة','Camouflage météo','Disguise screen'][L]}</span>
          </button>
          <button type="button" class="btn o" onclick="amanClearSafetyPlan()" style="color:var(--red);border-color:var(--red)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            <span>${['مسح الخطة فوراً','Effacer le plan','Clear plan'][L]}</span>
          </button>
        </div>
      </div>
    </div>
  `;
},
about(){const a=ts("aboutB");let h=`<h2>${t("about")}</h2><p><b>${t("desc")}</b></p><div class="grid">`;for(let i=0;i<a.length;i+=2)h+=`<div class="card"><h3>${a[i]}</h3><p>${a[i+1]}</p></div>`;return h+"</div>"},
digital(){const cs=ts("cats");return `<h2>${t("digital")}</h2>${dm()}<div class="bar"><input id="q" placeholder="${t("search")}" oninput="flt()" aria-label="${t("search")}"></div><div class="grid" id="al">${art("")}</div><div class="note">${t("gN")}</div>`},
dir(){
  const cs = ts("cats");
  return `
    <div class="dir-page-wrap">
      <div class="page-head-banner">
        <h2>${t("dir")}</h2>
        <p class="section-sub">${t("dirN")}</p>
      </div>

      <!-- Emergency quick strip -->
      ${nums()}

      <!-- Search & Filters Toolset -->
      <div class="card dir-filter-card">
        <div class="dir-search-bar">
          <div class="input-with-icon">
            <svg class="search-lens-ic" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input id="dq" type="search" placeholder="${['ابحثي باسم المؤسسة، المدينة، أو رقم الهاتف...','Rechercher par nom, ville ou téléphone...','Search by institution, city, or phone...'][L]}" oninput="dirList()" aria-label="${t("search")}">
          </div>
        </div>

        <div class="dir-selects-row">
          <div class="filter-field">
            <label for="dr">${t("region")}:</label>
            <select id="dr" onchange="dirList()" aria-label="${t("region")}">
              <option value="">${t("region")}: ${t("all")} (12)</option>
              ${RG.map((x, i) => `<option value="${i}">${rn(i)}</option>`).join("")}
            </select>
          </div>

          <div class="filter-field">
            <label for="dk">${['نوع الخدمة','Type de service','Service type'][L]}:</label>
            <select id="dk" onchange="dirList()" aria-label="${['نوع الخدمة','Type de service','Service type'][L]}">
              <option value="">${t("all")}</option>
              ${cs.map((c, i) => `<option value="${i}">${c}</option>`).join("")}
            </select>
          </div>

          <div class="filter-reset-action">
            <button type="button" class="btn o btn-reset-filters" onclick="amanResetDirFilters()" title="${['إلغاء التصفية','Réinitialiser','Reset'][L]}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
              <span>${['إعادة ضبط','Effacer','Reset'][L]}</span>
            </button>
          </div>
        </div>

        <!-- 12 Quick Region Horizontal Pills -->
        <div class="quick-reg-scroll" role="group" aria-label="${t("region")}">
          <button type="button" class="quick-reg-pill active" data-r="" onclick="amanResetDirFilters()">${t("all")}</button>
          ${RG.map((x, i) => `<button type="button" class="quick-reg-pill" data-r="${i}" onclick="amanQuickSelectRegion(${i})">${rn(i)}</button>`).join("")}
        </div>
      </div>

      <!-- Results Count Bar -->
      <div class="dir-results-bar">
        <span id="dir-count" class="dir-count-txt"></span>
        <a href="#guide" class="dir-guide-link">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          <span>${['دليل المساطر والشكايات','Guide des démarches','Filing complaints guide'][L]} &rarr;</span>
        </a>
      </div>

      <!-- List of Results Grid -->
      <div class="grid dir-cards-grid" id="dres"></div>

      <!-- 12 Regions Table Summary -->
      <div class="card dir-regions-overview" style="margin-top:28px">
        <div class="reg-overview-head">
          <svg class="ic" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <h3>${['تغطية جهات المملكة المغربية الاثنتي عشرة (12)','Couverture des 12 régions du Maroc','Morocco 12 Regions Coverage'][L]}</h3>
        </div>
        <p class="muted" style="margin:4px 0 14px;font-size:.9rem">${['انقري على أي جهة لفلترة المراكز المتاحة بها مباشرة:','Cliquez sur une région pour filtrer les centres associés :','Tap any region to filter available centers:'][L]}</p>
        <div class="grid dir-reg-grid-links">
          ${RG.map((x, i) => {
            const orgCount = ORG.filter(o => o.r === i).length;
            return `
              <button type="button" class="card dir-reg-quick-card" onclick="rg(${i})">
                <div class="reg-card-top">
                  <b>${rn(i)}</b>
                  <span class="reg-count-badge">${orgCount} ${['مراكز','centres','centers'][L]}</span>
                </div>
                <small class="muted">${['عرض خلايا التكفل &larr;','Voir les unités &larr;','View units &larr;'][L]}</small>
              </button>
            `;
          }).join("")}
        </div>
      </div>
    </div>
  `;
},
academy(){const e=ts("ev");return `<h2>${t("academy")}</h2>${dm()}<h3>${t("acT")}</h3><div class="grid">${[0,2].map(i=>`<div class="card"><h3>${e[i]}</h3><p>${e[i+1]}</p></div>`).join("")}</div><h3>${t("reg")}</h3>${form("ev",ts("ef"),["email","text"],"0","")}`},
safe(){return `<h2>${t("safe")}</h2><div class="card"><h3>${t("safeT")}</h3><p>${t("safeD")}</p></div><h3>${t("partF")}</h3>${form("pt",ts("pf"),["text","text","email","text","text","area"],"0,1,2,5","1")}`},
guide(){const l=ts("lv");return `<h2>${t("guide")}</h2><div class="em"><h3>${t("em")}</h3><p>${t("emD")}</p></div>${nums()}<div class="note"><b>${t("sfT")}</b><br>${t("trail")}</div><div class="card" style="margin:14px 0"><h3>${t("rights")}</h3><p>${t("rightsD")}</p></div><div class="grid">${[0,2,4].map(i=>`<div class="card"><h3>${l[i]}</h3><p>${l[i+1]}</p></div>`).join("")}</div><div class="note">${t("gN")}</div><p><a class="btn d" href="#dir">${t("c3")}</a></p>`},
imp(c){const n=ts("imp"),ty=ts("ity");let h=n.map((x,i)=>`<div class="card"><h3>${x}</h3><p style="font-size:1.4rem;font-weight:700">${IM[i].v||t("nyr")}</p><span class="tag">${ty[IM[i].ty]}</span></div>`).join("");return c?h:`<h2>${t("impact")}</h2><p>${t("impN")}</p><div class="grid">${h}</div>`},
install(){
  const dev=amanGetDeviceInfo();
  const isAr=L===0,isFr=L===1;
  const s=ts("inL");

  const statusBadge=dev.isStandalone
    ? `<span class="pwa-status-badge is-installed"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> ${isAr?'مثبت بنجاح':(isFr?'Installée avec succès':'Installed')}</span>`
    : `<span class="pwa-status-badge is-web"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> ${isAr?'وضع المتصفح (جاهز للتثبيت)':(isFr?'Mode Web (Prête à installer)':'Web mode (Ready to install)')}</span>`;

  const heroCta=dev.isStandalone
    ? `<div class="pwa-hero-cta pwa-installed-cta">
        <div class="pwa-hero-cta-icon">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#2a9d8f" stroke-width="2.2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <div class="pwa-hero-cta-body">
          <b>${isAr?'تطبيق أمان مثبت ويعمل بنظام PWA الكامل على جهازك':(isFr?'AMAN est installée en tant qu’application autonome':'AMAN is installed as a standalone app')}</b>
          <p>${isAr?'تتمتعين بوصول فوري لطوارئ SOS والدليل القانوني حتى في حالة انقطاع شبكة الإنترنت بالكامل.':(isFr?'Vous bénéficiez d’un accès d’urgence et juridique hors-ligne complet.':'You have complete offline access to SOS and legal guides.')}</p>
        </div>
      </div>`
    : `<div class="pwa-hero-cta">
        <button type="button" class="btn d pwa-main-install-btn" onclick="amanTriggerInstall()">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          <span>${dev.isIOS?(isAr?'عرض طريقة التثبيت على الآيفون / الآيباد':(isFr?'Guide d’installation iPhone / iPad':'Install on iPhone / iPad')):(isAr?'تثبيت تطبيق أمان الآن بنقرة واحدة':(isFr?'Installer l’application AMAN maintenant':'Install AMAN App Now'))}</span>
        </button>
        <p class="muted" style="margin:8px 0 0;font-size:.85rem">
          ${isAr?'تثبيت آمن ومجاني وفوري (< 2 ميغابايت) دون الحاجة لحساب أو متجر تطبيقات.':(isFr?'Installation sûre, immédiate (< 2 Mo) et sans compte Google ou Apple.':'Safe, instant install (< 2 MB) without store accounts.')}
        </p>
      </div>`;

  return `
    <div class="pwa-hub-wrap">
      <div class="pwa-hub-head">
        <img src="icon-192.png" alt="AMAN" class="pwa-hub-logo">
        <div class="pwa-hub-titles">
          <h2>${t("install")}</h2>
          <p class="muted">${isAr?'تطبيق وطني مغربي آمن وخفيف للعمل على جميع الهواتف والأجهزة اللوحية وأجهزة الكمبيوتر بدون إنترنت':(isFr?'Application nationale marocaine pour tous les appareils, fonctionnelle sans Internet':'Moroccan national platform for all devices, fully operational offline')}</p>
        </div>
      </div>

      <!-- Telemetry Card -->
      <div class="card pwa-diag-card">
        <div class="pwa-diag-grid">
          <div class="pwa-diag-item">
            <span class="muted">${isAr?'نوع الجهاز والمتصفح:':(isFr?'Appareil & Navigateur :':'Device & Browser:')}</span>
            <b>${dev.osName} · ${dev.browserName}</b>
          </div>
          <div class="pwa-diag-item">
            <span class="muted">${isAr?'حالة التطبيق:':(isFr?'État de l\'application :':'App state:')}</span>
            <div>${statusBadge}</div>
          </div>
          <div class="pwa-diag-item">
            <span class="muted">${isAr?'الجاهزية بدون إنترنت:':(isFr?'Disponibilité hors-ligne :':'Offline readiness:')}</span>
            <b style="color:#2a9d8f">${isAr?'نشط ومدعوم (v28) ✓':(isFr?'Actif et prêt (v28) ✓':'Active & Ready (v28) ✓')}</b>
          </div>
          <div class="pwa-diag-item">
            <span class="muted">${isAr?'الخصوصية والسرية:':(isFr?'Confidentialité :':'Privacy:')}</span>
            <b>${isAr?'تخزين محلي مشفر 100%':(isFr?'100% local chiffré':'100% encrypted local')}</b>
          </div>
        </div>
      </div>

      ${heroCta}

      <!-- Device Specific Guides -->
      <h3 style="margin:30px 0 14px">${isAr?'طرق التثبيت المعتمدة حسب كل جهاز':(isFr?'Instructions d’installation par appareil':'Installation instructions per device')}</h3>
      <div class="grid pwa-guides-grid">
        <!-- Android Card -->
        <div class="card pwa-guide-card ${dev.isAndroid?'is-user-device':''}">
          <div class="pwa-guide-head">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="3"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            <div>
              <h4 style="margin:0">${isAr?'هواتف أندرويد (Android)':(isFr?'Smartphones Android':'Android Phones')}</h4>
              <small class="muted">Samsung · Xiaomi · Oppo · Vivo · Huawei</small>
            </div>
            ${dev.isAndroid?`<span class="tag" style="background:#2a9d8f;color:#fff">${isAr?'جهازك الحالي':'Votre appareil'}</span>`:''}
          </div>
          <ol class="pwa-steps-list">
            <li>${isAr?'اضغطي على زر <b>«تثبيت تطبيق أمان الآن»</b> بالأعلى.':(isFr?'Appuyez sur « Installer l’application AMAN » ci-dessus.':'Tap "Install AMAN App Now" above.')}</li>
            <li>${isAr?'أو افتحي قائمة المتصفح <b>[⋮]</b> ثم اختاري <b>«تثبيت التطبيق»</b> أو «إضافة إلى الشاشة الرئيسية».':(isFr?'Ou ouvrez le menu [⋮] puis « Installer l’application ».':'Or open menu [⋮] and tap "Install app".')}</li>
            <li>${isAr?'سيتم وضع أيقونة أمان المستقلة مباشرة على شاشة هاتفك.':(isFr?'L’icône AMAN sera ajoutée directement à votre écran d’accueil.':'The AMAN icon will be pinned to your home screen.')}</li>
          </ol>
        </div>

        <!-- Apple iOS Card -->
        <div class="card pwa-guide-card ${dev.isIOS?'is-user-device':''}">
          <div class="pwa-guide-head">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20.94c1.5 0 2.75-.75 3.5-.75.75 0 2.25.75 3.5.75 2 0 3.5-1.5 4.5-3.5-2-.75-2.5-3-2.5-4.5 0-2 1.5-3.25 3-4-1-1.5-2.5-2.25-4-2.25-1.5 0-2.5.75-3.5.75-.75 0-2-.75-3.25-.75-2 0-4 1.5-5 3.5-1.5 2.75-.5 7.5 1.75 10.75.75 1 1.75 2 3.25 2z"/><path d="M12 5.5c1-1.25 1.5-2.75 1.25-4.25-1.25.25-2.75 1-3.5 2.25-.75 1-1.25 2.5-1 4 1.5 0 2.5-.75 3.25-2z"/></svg>
            <div>
              <h4 style="margin:0">${isAr?'أجهزة آبل (iPhone & iPad)':(isFr?'Appareils Apple (iPhone / iPad)':'Apple Devices (iOS)')}</h4>
              <small class="muted">Apple Safari iOS</small>
            </div>
            ${dev.isIOS?`<span class="tag" style="background:#2a9d8f;color:#fff">${isAr?'جهازك الحالي':'Votre appareil'}</span>`:''}
          </div>
          <ol class="pwa-steps-list">
            <li>${isAr?'افتحي أمان داخل متصفح <b>Safari</b>.':(isFr?'Ouvrez le portail dans <b>Safari</b>.':'Open AMAN in <b>Safari</b>.')}</li>
            <li>${isAr?'اضغطي على زر المشاركة <b>[↑]</b> (Share) في أسفل الشاشة.':(isFr?'Touchez l’icône de partage <b>[↑]</b> en bas.':'Tap the Share icon <b>[↑]</b> at the bottom.')}</li>
            <li>${isAr?'مرري لأسفل واختاري <b>«إضافة إلى الصفحة الرئيسية»</b> (+).':(isFr?'Sélectionnez <b>« Sur l’écran d’accueil »</b> (+).':'Select <b>"Add to Home Screen"</b> (+).')}</li>
            <li>${isAr?'انقري على <b>«إضافة»</b> (Ajouter) أعلى اليمين.':(isFr?'Confirmez en cliquant sur <b>« Ajouter »</b>.':'Tap <b>"Add"</b> at the top right.')}</li>
          </ol>
          <button type="button" class="btn o" style="width:100%;margin-top:8px" onclick="amanOpenIosInstallModal()">
            ${isAr?'عرض الشرح التفاعلي المصور للآيفون':(isFr?'Voir le guide visuel iPhone':'Show iPhone visual guide')}
          </button>
        </div>

        <!-- PC / Mac Desktop Card -->
        <div class="card pwa-guide-card ${dev.isWindows||dev.isMac?'is-user-device':''}">
          <div class="pwa-guide-head">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            <div>
              <h4 style="margin:0">${isAr?'أجهزة الكمبيوتر (PC & Mac)':(isFr?'Ordinateurs (PC & Mac)':'Computers (PC & Mac)')}</h4>
              <small class="muted">Windows · macOS · Chrome · Edge</small>
            </div>
            ${dev.isWindows||dev.isMac?`<span class="tag" style="background:#2a9d8f;color:#fff">${isAr?'جهازك الحالي':'Votre appareil'}</span>`:''}
          </div>
          <ol class="pwa-steps-list">
            <li>${isAr?'اضغطي على أيقونة التثبيت في أقصى يمين شريط العنوان (رمز الشاشة والسهم).':(isFr?'Cliquez sur l’icône d’installation dans la barre d’adresse.':'Click the install icon in the address bar.')}</li>
            <li>${isAr?'أو من قائمة المتصفح [⋮] -> <b>«تثبيت تطبيق أمان»</b>.':(isFr?'Ou menu [⋮] -> « Installer AMAN ».':'Or menu [⋮] -> "Install AMAN".')}</li>
            <li>${isAr?'يفتح التطبيق في نافذة مستقلة وسريعة بدون شريط المتصفح.':(isFr?'L’application s’ouvre dans une fenêtre dédiée.':'The app opens in a distraction-free window.')}</li>
          </ol>
        </div>
      </div>

      <!-- PWA Advantages -->
      <h3 style="margin:30px 0 14px">${isAr?'مميزات التطبيق التقنية (PWA)':(isFr?'Avantages de l’application PWA':'PWA Core Advantages')}</h3>
      <div class="grid">
        <div class="card">
          <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <h4 style="margin:6px 0 4px">${isAr?'جاهزية فورية بدون إنترنت':(isFr?'Fonctionnement 100% hors-ligne':'100% Offline Capability')}</h4>
          <p class="muted" style="font-size:.9rem">${isAr?'أرقام النجدة (19، 177، 8350، 15) ودليل المراكز وقانون 103-13 محفوظة مسبقاً ومتاحة أينما كنتِ.':(isFr?'Les numéros d’urgence et guides juridiques restent accessibles même sans connexion.':'Emergency hotlines and legal care cells stay accessible anywhere without data.')}</p>
        </div>
        <div class="card">
          <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          <h4 style="margin:6px 0 4px">${isAr?'أمان وسرية وتمويه فوري':(isFr?'Sécurité et camouflage':'Security & Camouflage')}</h4>
          <p class="muted" style="font-size:.9rem">${isAr?'لا تتبع جغرافي ولا ملفات تعريفية إعلانية، مع إمكانية التمويه السريع لشاشة الطقس بضغطة واحدة.':(isFr?'Aucun traçage publicitaire, avec camouflage météo instantané d’un clic.':'Zero tracking, with instant disguise mode masking the screen.')}</p>
        </div>
        <div class="card">
          <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
          <h4 style="margin:6px 0 4px">${isAr?'خفيف جداً ومستقل':(isFr?'Ultra-léger (< 2 Mo)':'Ultra-lightweight (< 2 MB)')}</h4>
          <p class="muted" style="font-size:.9rem">${isAr?'لا يستهلك مساحة الذاكرة، ويتحدث تلقائياً ومجاناً في الخلفية عند توفر الإنترنت.':(isFr?'Ne surcharge pas votre stockage et se met à jour automatiquement en arrière-plan.':'Minimal storage footprint with silent automatic background updates.')}</p>
        </div>
      </div>

      <!-- Sharing -->
      <div class="card" style="margin-top:24px;text-align:center">
        <h4 style="margin:0 0 8px">${isAr?'شاركي تطبيق أمان مع من تحبين':(isFr?'Partager l’application AMAN':'Share AMAN Application')}</h4>
        <p class="muted" style="margin:0 0 16px">${isAr?'الأمان حق، والمساندة مسؤولية مشتركة. ساعدي في إيصال التطبيق لكل امرأة وفتاة بالمملكة المغربية.':(isFr?'La sécurité est un droit, le soutien une responsabilité collective. Partagez ce portail au Maroc.':'Safety is a right, support is a shared duty. Help spread AMAN across Morocco.')}</p>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          ${navigator.share?`<button type="button" class="btn d" onclick="navigator.share({title:'AMAN – أمان',text:'المنصة الوطنية للوقاية من العنف ومساندة النساء في المغرب',url:location.href.split('#')[0]})"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-3px"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg> <span>${t("shr")}</span></button>`:''}
          <a class="btn o" href="#qr">${t("qr")}</a>
        </div>
      </div>
    </div>
  `;
},
qr(){return `<h2>${t("qr")}</h2><div class="card" style="text-align:center"><div id="qc" style="display:inline-block;padding:14px;background:#fff;border-radius:12px"></div><p>${t("qrD")}</p><button class="btn d np" onclick="print()">${t("pr1")}</button></div><div class="grid">${["digital","dir","guide","contact"].map(k=>`<a class="card" href="#${k}"><h3>${t(k)}</h3></a>`).join("")}</div>`},
contact(){
const socials=[
  ['https://www.facebook.com/AMAN.Maroc','Facebook',
   '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>'],
  ['https://www.instagram.com/aman.maroc','Instagram',
   '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>'],
  ['https://www.youtube.com/@AMANMaroc','YouTube',
   '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>']
];
const socialRow=socials.map(([u,n,ic])=>`<a class="social-link" href="${u}" target="_blank" rel="noopener noreferrer" aria-label="${n}">${ic}<span>${n}</span></a>`).join('');
return `<h2>${t("contact")}</h2>
<div class="ct-info-grid">
  <div class="card">
    <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/></svg>
    <h3>${['البريد الإلكتروني','Courriel','Email'][L]}</h3>
    <p><a href="mailto:contact@aman.ma">contact@aman.ma</a></p>
  </div>
  <div class="card">
    <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
    <h3>${['الشبكات الاجتماعية','Réseaux sociaux','Social networks'][L]}</h3>
    <div class="social-row">${socialRow}</div>
  </div>
  <div class="card">
    <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
    <h3>${['المقر','Siège','Headquarters'][L]}</h3>
    <p>${['المغرب · الرباط','Maroc · Rabat','Morocco · Rabat'][L]}</p>
  </div>
</div>
${form("ct",ts("f"),["text","email","text","text","area"],"3,4","1")}
<h3>${t("partF")}</h3><p><a class="btn d" href="#safe">${t("safe")}</a></p><p>${t("priv")}</p>`},
ai(){
  setTimeout(() => {
    if (typeof amanInitAi === 'function') amanInitAi();
  }, 40);
  return typeof amanRenderAiPage==='function'?amanRenderAiPage():'';
},
sign(){
  if (typeof amanSetAiMode === 'function') {
    amanSetAiMode('sign');
  } else {
    window.amanAiMode = 'sign';
  }
  setTimeout(() => {
    if (typeof amanInitAi === 'function') amanInitAi();
    if (typeof amanStartSignCamera === 'function') amanStartSignCamera();
  }, 60);
  return typeof amanRenderAiPage==='function'?amanRenderAiPage():'';
},
blind(){
  if (typeof amanSetAiMode === 'function') {
    amanSetAiMode('blind');
  } else {
    window.amanAiMode = 'blind';
  }
  setTimeout(() => {
    if (typeof amanInitAi === 'function') amanInitAi();
  }, 60);
  return typeof amanRenderAiPage==='function'?amanRenderAiPage():'';
},
voice(){
  return P.blind();
},
account(){
  const isLoggedIn = typeof amanCurrentUser === 'function' ? amanCurrentUser() : null;
  const cards = [
    ['guide', 'التوجيه', 'Orientation', 'Guidance'],
    ['laws', 'القوانين', 'Lois', 'Laws'],
    ['ai', t('ai'), t('ai'), t('ai')],
    ['digital', t('digital'), t('digital'), t('digital')]
  ];
  const qs = `<h2 style="margin-top:28px">${['خدماتك السريعة','Vos accès rapides','Your quick access'][L]}</h2>
<div class="grid">${cards.map(c=>`<a class="card" href="#${c[0]}" style="text-decoration:none;color:inherit">${ic(c[0])}<h3>${c[L+1]||c[1]}</h3></a>`).join('')}</div>`;

  if (isLoggedIn && isLoggedIn.anon === false) {
    return `<h2>${t('account')}</h2>
<div class="card acc-profile">
  <div class="acc-av">${ic('account')}</div>
  <div>
    <p><b>${esc(isLoggedIn.nickname || isLoggedIn.username || ['مستخدمة','Utilisatrice','User'][L])}</b></p>
    <p class="muted" style="font-size:.88rem">${['عضو منذ','Membre depuis','Member since'][L]} ${isLoggedIn.created ? new Date(isLoggedIn.created).toLocaleDateString([['ar-MA','fr-FR','en-GB'][L]]) : ''}</p>
  </div>
</div>
<p><button class="btn o" onclick="amanLogout && amanLogout()">${['خروج من الحساب','Se déconnecter','Sign out'][L]}</button></p>
${qs}`;
  }

  // Not logged in - show full privacy and session management dashboard
  return `<h2>${t('account')} · ${['إدارة الأمان والخصوصية','Gestion de sécurité & confidentialité','Security & Privacy Management'][L]}</h2>
<div class="note" style="border-inline-start:4px solid var(--g);background:rgba(4,120,87,0.08)">
  <b style="color:var(--g)">${['الخصوصية والأمان أولاً',"Confidentialité et sécurité d'abord",'Privacy and security first'][L]}</b><br>
  ${['جميع خدمات منصة أمان متاحة لكِ بحرية وسرية تامة دون الحاجة لإنشاء أي حساب أو إدخال أي معطيات شخصية. بيانات التصفح لا تُحفظ على أي خادم خارجي.','Toutes les fonctionnalités sont accessibles en totale confidentialité sans inscription. Aucune donnée personnelle n’est transmise à des tiers.','All AMAN platform services are fully accessible in complete confidentiality without registration. No personal data is stored on external servers.'][L]}
</div>

<div class="grid" style="margin-top:20px">
  <div class="card">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
      <div class="acc-av" style="background:rgba(75,23,111,0.12);color:var(--p)">${ic('safe')}</div>
      <div>
        <h3 style="margin:0;font-size:1.05rem">${['حالة الهوية والجلسة','Statut de la session','Session Status'][L]}</h3>
        <small class="muted">${['هوية مشفرة ومحفوظة بنسبة 100%','Session anonyme et chiffrée','Anonymous encrypted session'][L]}</small>
      </div>
    </div>
    <p style="font-size:.9rem;line-height:1.6;margin:8px 0">${['أنتِ تتصفحين المنصة حالياً تحت وسم هوية محمية. يمكنكِ مسح جميع سجلات الاستخدام بنقرة واحدة عند الانتهاء.','Vous naviguez sous statut protégé. Vous pouvez effacer l’historique local à tout moment.','Browsing under protected status. You can clear local session data at any time.'][L]}</p>
    <button type="button" class="btn o" onclick="if(confirm(['هل أنتِ متأكدة من رغبتك في مسح بيانات الجلسة وسجل التصفح المحلي؟','Voulez-vous effacer les données de navigation locales ?','Clear local browsing data?'][L])){localStorage.clear();sessionStorage.clear();location.reload();}" style="font-size:.85rem;border-color:var(--red);color:var(--red)">
      ${['مسح فوري لسجل الجلسة والتصفح','Effacer l’historique local','Clear local session data'][L]}
    </button>
  </div>

  <div class="card">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
      <div class="acc-av" style="background:rgba(244,185,66,0.15);color:#d97706">${ic('digital')}</div>
      <div>
        <h3 style="margin:0;font-size:1.05rem">${['أدوات الحماية الشخصية','Outils de protection','Protection Tools'][L]}</h3>
        <small class="muted">${['جاهزية الطوارئ والاستجابة','Dispositifs de sécurité','Safety Readiness'][L]}</small>
      </div>
    </div>
    <ul style="font-size:.9rem;line-height:1.8;margin:8px 0;padding-inline-start:18px">
      <li><b>${['التمويه السريع (Camo):','Camouflage rapide :','Quick disguise:'][L]}</b> ${['متاح عبر زر SOS أو شريط الأمان لتغطية الشاشة بشاشة طقس عادية.','Disponible via le bouton SOS pour masquer l’écran instantanément.','Available via SOS button to mask the screen instantly.'][L]}</li>
      <li><b>${['أرقام النجدة المغربية:','Numéros d’urgence :','Emergency numbers:'][L]}</b> 19 (الشرطة) | 177 (الدرك) | 8350 (الاستماع).</li>
      <li><b>${['الكاميرا ولغة الإشارة:','Caméra & Langue des signes :','Camera & Sign language:'][L]}</b> ${['متاحة في قسم «مستشارك» للتواصل المرئي الفوري.','Accessible dans « Mostacharak » pour les femmes sourdes.','Available in Mostacharak for deaf women.'][L]}</li>
    </ul>
  </div>
</div>

${qs}`;
},
};
function amanQR(){const go=()=>{const c=document.getElementById("qc");if(c&&window.QRCode&&!c.firstChild)new QRCode(c,{text:location.href.split("#")[0],width:200,height:200})};if(window.QRCode)return go();let sc=document.getElementById("qr-lib");if(!sc){sc=document.createElement("script");sc.id="qr-lib";sc.src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";sc.integrity="sha384-3zSEDfvllQohrq0PHL1fOXJuC/jSOO34H46t6UQfobFOmxE5BpjjaIJY5F2/bMnU";sc.crossOrigin="anonymous";sc.referrerPolicy="no-referrer";sc.async=true;document.head.appendChild(sc)}sc.addEventListener("load",go,{once:true})}function draw(){chrome();const r=route(),m=document.getElementById("m");m.innerHTML=(P[r]||P.home)();if(r=="dir"){if(PRE!==""){document.getElementById("dr").value=PRE;PRE=""}dirList()}if(r=="qr")amanQR();amanUpdatePwaUi();scrollTo(0,0)}
addEventListener("hashchange",draw); // first render happens on DOMContentLoaded
function amanInitApp(){
  try {
    if (typeof window.draw === "function") window.draw();
    else draw();
  } catch(e) {
    console.error("[AMAN Boot Error]", e);
  }
  amanCheckFloatingInstallBanner();
  amanUpdatePwaUi();
}
if(document.readyState==="loading"){
  document.addEventListener("DOMContentLoaded", amanInitApp);
}else{
  amanInitApp();
}
