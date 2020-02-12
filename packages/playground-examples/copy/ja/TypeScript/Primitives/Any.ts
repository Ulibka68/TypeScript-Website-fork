// AnyはTypeScriptのエスケープ句です。 
// any型を利用することで、一区切りのコードを
// JavaScriptの様に動的に扱ったり、
// 型システムの制限を回避することができます。

// any型を利用する良いケースはJSON parsingです

const myObject = JSON.parse("{}");

// TypeScriptにおけるAny宣言は、あなたがその値について詳しく知っていて
// 安全なものなので信じてください、という宣言です。
// それが厳密に正しくない場合でも。例えば、次のコードはクラッシュします。

myObject.x.y.z;

// any型を利用することで、型安全のトレードオフと引き換えに、
// よりオリジナルに近いJavaScriptコードを書くことができます。

// any型は、どんな型でも（neverを除いた）割り当て可能であり、
// 一方の型をもう一方に割り当て可能にする「型のワイルドカード」
// によく似ています。

declare function debug(value: any);

debug("a string");
debug(23);
debug({ color: "blue" });

// いずれのdebug関数実行も、引数の型を
// anyに置き換えることができるため許可されます。

// TypeScriptはany型の位置を考慮します。
// たとえば、この様なタプル型を利用した関数引数であってもです。

declare function swap(x: [number, string]): [string, number];

declare const pair: [any, any];
swap(pair);

// swap関数引数であるnumber型・string型のペアは、
// any型のペアと置き換えることができるため、
// この関数実行は許可されます。

// タプル型が初見の場合、example:tuples を参照してください。

// unknown型はany型の兄弟とも言うことができますが、
// any型は「最善策を知っています」という場合に利用する一方で、
// unknown型は「最善策が分からないので、TSに型を伝える必要があります」
// という場合に利用します。

// 詳細は example:unknown-and-never を参照してください。
