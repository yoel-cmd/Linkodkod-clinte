README — Client (React + TypeScript)



קליינט React (TS) עם Router. דף הבית מציג רק טפסי התחברות/הרשמה; אחרי התחברות מוצלחת — נטענים הפוסטים מהשרת. אין JWT — שולחים username/password ב-body במסלול המאומת.

 טכנולוגיות

React + TypeScript

React Router DOM

Fetch API

localStorage 



איך מריצים

ב־CRUD.ts וב־auth.ts:

url= "http://localhost:3000";

עדכן לפי כתובת השרת.

 הרצה

npm install
npm run dev


 זרימת אימות (ללא טוקן)

1. HomePage – מציג טופס Login/Register אם אין קרדנציאלז שמורים.


2. התחברות/הרשמה מוצלחת → שמירת {username,password} ב-localStorage .


3. בקשת פוסטים נשלחת ל־POST /post/auth-list עם שם משתמש וסיסמא ב-body.


4. פיד מציג כרטיסים קומפקטיים  לחיצה על כרטיס → /post/:id.


5. דף פוסט מציג תמונה זו בלבד + desc + y + כפתור לייק 



 ניווט (Routes)

/ — Home: התחברות/הרשמה → פיד

/post/:id — פוסט בודד

/create-post — יצירת פוסט

/posts 




















---
