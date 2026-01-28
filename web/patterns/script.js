const data = {

sw_fixed: `
<h3>FIXED SLIDING WINDOW</h3>

<h3>✅ TEMPLATE 1: SLIDING WINDOW — FIXED SIZE</h3>

<p><b>📌 When to use</b></p>
<ul>
  <li>Subarray / substring</li>
  <li>Window size K is given</li>
  <li>Continuous elements</li>
</ul>

<hr>

<p><b>🧠 Core Idea (remember this line)</b></p>
<p>Window size never changes. We slide it.</p>

<hr>

<p><b>🧩 Mental Steps (NO code yet)</b></p>
<ol>
  <li>Build the first window of size K</li>
  <li>Store its answer</li>
  <li>Slide the window:
    <ul>
      <li>Add new element (right side)</li>
      <li>Remove old element (left side)</li>
    </ul>
  </li>
  <li>Update answer at each step</li>
</ol>

<hr>

<p><b>👉 Pointer Movement Rule</b></p>
<ul>
  <li>right moves forward</li>
  <li>left moves forward</li>
  <li>Both move together</li>
</ul>

<hr>

<p><b>⏱ Time & Space</b></p>
<ul>
  <li>Time: O(n)</li>
  <li>Space: O(1) / O(26) / O(n) (depends on data)</li>
</ul>

<hr>

<p><b>🧪 Typical Problems</b></p>
<ul>
  <li>Maximum sum subarray of size K</li>
  <li>First negative number in every window</li>
  <li>Count of anagrams</li>
  <li>Sliding window maximum</li>
</ul>

<hr>

<p><b>⚠ Common Mistakes</b></p>
<ul>
  <li>Using nested loops ❌</li>
  <li>Forgetting to remove left element ❌</li>
  <li>Treating it like variable window ❌</li>
</ul>

<hr>

<p><b>🧠 One-line Recognition Trick</b></p>
<p>If K is fixed → Fixed Sliding Window</p>

<hr>

<p><b>🔑 Mental Template (short)</b></p>
<pre>
Build first window of size K
Update answer
Slide window:
  add right
  remove left
</pre>
`,

sw_variable: `
<h3>✅ TEMPLATE 2: SLIDING WINDOW — VARIABLE SIZE</h3>

<p><b>📌 When to use</b></p>
<ul>
  <li>Subarray / substring</li>
  <li>Need longest / shortest / max / min</li>
  <li>Condition based (sum, distinct count, frequency, etc.)</li>
  <li>Window size NOT fixed</li>
</ul>

<hr>

<p><b>🧠 Core Idea</b></p>
<p>
Right pointer expands the window,<br>
Left pointer shrinks it when condition breaks.
</p>

<hr>

<p><b>🧩 Mental Steps (VERY IMPORTANT)</b></p>
<ol>
  <li>Start with left = 0</li>
  <li>Move right to expand the window</li>
  <li>Update window data (sum / map / count)</li>
  <li>While condition is invalid:
    <ul>
      <li>Shrink window from left</li>
      <li>Update window data</li>
    </ul>
  </li>
  <li>When window is valid → update answer</li>
</ol>

<hr>

<p><b>👉 Pointer Movement Rule</b></p>
<ul>
  <li>right always moves forward</li>
  <li>left moves only when condition breaks</li>
</ul>

<hr>

<p><b>⏱ Time & Space</b></p>
<ul>
  <li>Time: O(n) (each pointer moves once)</li>
  <li>Space: depends on map / array</li>
</ul>

<hr>

<p><b>🧪 Typical Problems</b></p>
<ul>
  <li>Longest substring without repeating characters</li>
  <li>Longest subarray with at most K distinct</li>
  <li>Smallest subarray with sum ≥ K</li>
  <li>Longest substring with at most 2 distinct characters</li>
</ul>

<hr>

<p><b>⚠ Common Mistakes</b></p>
<ul>
  <li>Shrinking window only once instead of while ❌</li>
  <li>Updating answer when window is invalid ❌</li>
  <li>Using brute force loops ❌</li>
</ul>

<hr>

<p><b>🧠 One-line Recognition Trick</b></p>
<p>If longest / smallest + condition → Variable Sliding Window</p>

<hr>

<p><b>🔑 Mental Template (short)</b></p>
<pre>
for right in array:
  add right to window
  while window invalid:
    remove left
    left++
  update answer
</pre>
`,

two_pointers: `
<h3>✅ TEMPLATE 3: TWO POINTERS (NON-SLIDING WINDOW)</h3>

<p><b>⚠️ This is NOT sliding window.</b><br>
Pointers move based on comparison, not window validity.</p>

<hr>

<p><b>📌 When to use</b></p>
<ul>
  <li>Array / String</li>
  <li>Sorted OR can be sorted</li>
  <li>Compare elements from two ends</li>
  <li>Need pair / rearrangement / movement</li>
</ul>

<hr>

<p><b>🧠 Core Idea</b></p>
<p>Use left for smaller side, right for larger side.</p>

<hr>

<p><b>🧩 Mental Steps</b></p>
<ol>
  <li>Set left = 0, right = n-1</li>
  <li>Compare a[left] and a[right]</li>
  <li>Move only one pointer based on condition</li>
  <li>Stop when left ≥ right</li>
</ol>

<hr>

<p><b>👉 Pointer Movement Rule</b></p>
<ul>
  <li>If condition wants larger value → move left</li>
  <li>If condition wants smaller value → move right</li>
  <li>Never move both blindly</li>
</ul>

<hr>

<p><b>⏱ Time & Space</b></p>
<ul>
  <li>Time: O(n)</li>
  <li>Space: O(1)</li>
</ul>

<hr>

<p><b>🧪 Typical Problems</b></p>
<ul>
  <li>Two Sum (sorted array)</li>
  <li>Move zeros to end</li>
  <li>Remove duplicates from sorted array</li>
  <li>Container with most water</li>
</ul>

<hr>

<p><b>⚠ Common Mistakes</b></p>
<ul>
  <li>Using on unsorted array without sorting ❌</li>
  <li>Moving both pointers in one step ❌</li>
  <li>Mixing with sliding window ❌</li>
</ul>

<hr>

<p><b>🧠 One-line Recognition Trick</b></p>
<p>If sorted + two ends → Two Pointers</p>

<hr>

<p><b>🔑 Mental Template (short)</b></p>
<pre>
l = 0, r = n-1
while l < r:
  if condition satisfied:
    update answer
  move either l or r
</pre>
`,

prefix: `
<h3>✅ TEMPLATE 4: PREFIX SUM (BASIC)</h3>

<p>This is the foundation for MANY problems.</p>

<hr>

<p><b>📌 When to use</b></p>
<ul>
  <li>Range sum queries</li>
  <li>Multiple sum queries on same array</li>
  <li>Subarray sum but no negatives / no hashmap needed</li>
</ul>

<hr>

<p><b>🧠 Core Idea</b></p>
<p>Pre-calculate sums so queries become O(1).</p>

<hr>

<p><b>🧩 Mental Steps</b></p>
<ol>
  <li>Create prefix array</li>
  <li>prefix[i] = prefix[i-1] + a[i]</li>
  <li>sum = prefix[r] - prefix[l-1]</li>
</ol>

<hr>

<p><b>👉 Index Rule (VERY IMPORTANT)</b></p>
<ul>
  <li>If l == 0 → sum = prefix[r]</li>
</ul>

<hr>

<p><b>⏱ Time & Space</b></p>
<ul>
  <li>Preprocessing: O(n)</li>
  <li>Each query: O(1)</li>
  <li>Space: O(n)</li>
</ul>

<hr>

<p><b>🧪 Typical Problems</b></p>
<ul>
  <li>Range sum queries</li>
  <li>Find subarray sum quickly</li>
  <li>Equilibrium index</li>
</ul>

<hr>

<p><b>⚠ Common Mistakes</b></p>
<ul>
  <li>Off-by-one errors ❌</li>
  <li>Forgetting l == 0 case ❌</li>
  <li>Recalculating sum again and again ❌</li>
</ul>

<hr>

<p><b>🧠 One-line Recognition Trick</b></p>
<p>If many sum queries → Prefix Sum</p>

<hr>

<p><b>🔑 Mental Template (short)</b></p>
<pre>
prefix[0] = a[0]
for i = 1 to n-1:
  prefix[i] = prefix[i-1] + a[i]

rangeSum(l, r):
  if l == 0 return prefix[r]
  else return prefix[r] - prefix[l-1]
</pre>
`,

prefix_map: `
<h3>✅ TEMPLATE 5: PREFIX SUM + HASHMAP</h3>

<p>This is a killer pattern. Master this → many hard problems become easy.</p>

<hr>

<p><b>📌 When to use</b></p>
<ul>
  <li>Subarray sum = K</li>
  <li>Count number of subarrays</li>
  <li>Negative numbers present</li>
  <li>Continuous subarray</li>
</ul>

<hr>

<p><b>🧠 Core Idea</b></p>
<p>
If (currentSum − K) appeared before,<br>
then a valid subarray exists.
</p>

<hr>

<p><b>🧩 Mental Steps</b></p>
<ol>
  <li>Initialize sum = 0</li>
  <li>Create HashMap → (prefixSum → frequency)</li>
  <li>Put (0 → 1) in map first ✅</li>
  <li>For each element:
    <ul>
      <li>sum += a[i]</li>
      <li>Check if (sum - K) exists in map</li>
      <li>Update answer</li>
      <li>Store sum in map</li>
    </ul>
  </li>
</ol>

<hr>

<p><b>👉 Why map.put(0,1) is mandatory?</b></p>
<p>It handles subarrays starting from index 0.</p>

<hr>

<p><b>⏱ Time & Space</b></p>
<ul>
  <li>Time: O(n)</li>
  <li>Space: O(n)</li>
</ul>

<hr>

<p><b>🧪 Typical Problems</b></p>
<ul>
  <li>Subarray sum equals K</li>
  <li>Count subarrays with sum 0</li>
  <li>Longest subarray with sum K</li>
  <li>Binary subarrays with sum K</li>
</ul>

<hr>

<p><b>⚠ Common Mistakes</b></p>
<ul>
  <li>Forgetting map.put(0,1) ❌</li>
  <li>Using sliding window with negative numbers ❌</li>
  <li>Overwriting frequency instead of incrementing ❌</li>
</ul>

<hr>

<p><b>🧠 One-line Recognition Trick</b></p>
<p>If subarray sum + negatives → Prefix Sum + Map</p>

<hr>

<p><b>🔑 Mental Template (short)</b></p>
<pre>
map = {0:1}
sum = 0

for each element:
  sum += element
  if (sum - K) in map:
    update answer
  map[sum]++
</pre>
`,

hashmap_freq: `
<h3>✅ TEMPLATE 6: HASHMAP — FREQUENCY PATTERN</h3>

<p>This pattern is about counting & matching, not sums.</p>

<hr>

<p><b>📌 When to use</b></p>
<ul>
  <li>Count occurrences</li>
  <li>Compare frequencies</li>
  <li>Anagram / majority / duplicates</li>
  <li>“At most / at least” type conditions</li>
</ul>

<hr>

<p><b>🧠 Core Idea</b></p>
<p>Store frequency → update → check condition.</p>

<hr>

<p><b>🧩 Mental Steps</b></p>
<ol>
  <li>Create HashMap (or array if limited chars)</li>
  <li>Traverse array / string</li>
  <li>Increment count</li>
  <li>When window shrinks / element removed → decrement</li>
  <li>Check condition using map</li>
</ol>

<hr>

<p><b>👉 Frequency Rule</b></p>
<ul>
  <li>Add element → count++</li>
  <li>Remove element → count--</li>
  <li>If count becomes 0 → remove key (optional but clean)</li>
</ul>

<hr>

<p><b>⏱ Time & Space</b></p>
<ul>
  <li>Time: O(n)</li>
  <li>Space: O(n) / O(26)</li>
</ul>

<hr>

<p><b>🧪 Typical Problems</b></p>
<ul>
  <li>Valid anagram</li>
  <li>Group anagrams</li>
  <li>Majority element</li>
  <li>Top K frequent elements</li>
  <li>Longest substring with K distinct characters</li>
</ul>

<hr>

<p><b>⚠ Common Mistakes</b></p>
<ul>
  <li>Forgetting to decrement while shrinking window ❌</li>
  <li>Using HashMap when array is enough ❌</li>
  <li>Checking condition before updating map ❌</li>
</ul>

<hr>

<p><b>🧠 One-line Recognition Trick</b></p>
<p>If count / frequency / anagram → HashMap</p>

<hr>

<p><b>🔑 Mental Template (short)</b></p>
<pre>
map = {}

for each element:
  map[element]++
  if condition breaks:
    map[leftElement]--
    if map[leftElement] == 0:
      remove key
</pre>
`,
binary_search: `
<h3>✅ TEMPLATE 7: BINARY SEARCH (CLASSIC)</h3>

<p>This is pure logic, not memorization.</p>

<hr>

<p><b>📌 When to use</b></p>
<ul>
  <li>Sorted array</li>
  <li>Search for an element</li>
  <li>First / last occurrence</li>
  <li>Lower bound / upper bound</li>
</ul>

<hr>

<p><b>🧠 Core Idea</b></p>
<p>At every step, remove half of the search space.</p>

<hr>

<p><b>🧩 Mental Steps</b></p>
<ol>
  <li>low = 0, high = n-1</li>
  <li>Find mid</li>
  <li>Compare a[mid] with target</li>
  <li>Shrink search space</li>
  <li>Continue until low > high</li>
</ol>

<hr>

<p><b>👉 Mid Calculation Rule</b></p>
<p>To avoid overflow:<br>
<b>mid = low + (high - low) / 2</b></p>

<hr>

<p><b>⏱ Time & Space</b></p>
<ul>
  <li>Time: O(log n)</li>
  <li>Space: O(1)</li>
</ul>

<hr>

<p><b>🧪 Typical Problems</b></p>
<ul>
  <li>Binary search element</li>
  <li>First and last occurrence</li>
  <li>Lower bound / upper bound</li>
  <li>Search in rotated sorted array</li>
</ul>

<hr>

<p><b>⚠ Common Mistakes</b></p>
<ul>
  <li>Infinite loop (low < high vs low <= high) ❌</li>
  <li>Wrong mid update ❌</li>
  <li>Not shrinking search space ❌</li>
</ul>

<hr>

<p><b>🧠 One-line Recognition Trick</b></p>
<p>If sorted + search → Binary Search</p>

<hr>

<p><b>🔑 Mental Template (short)</b></p>
<pre>
low = 0, high = n-1
while low <= high:
  mid = low + (high - low)/2
  if a[mid] == target:
    answer found
  else if a[mid] < target:
    low = mid + 1
  else:
    high = mid - 1
</pre>
`,
binary_search_answer: `
<h3>✅ TEMPLATE 8: BINARY SEARCH ON ANSWER</h3>

<p>This pattern is where many people get confused — once you get it, many hard problems become easy.</p>

<hr>

<p><b>📌 When to use</b></p>
<ul>
  <li>Need minimum / maximum value</li>
  <li>Answer lies in a range</li>
  <li>Condition is monotonic (true → false or false → true)</li>
</ul>

<hr>

<p><b>🧠 Core Idea</b></p>
<p>Search on the answer space, not on the array.</p>

<hr>

<p><b>🧩 Mental Steps</b></p>
<ol>
  <li>Decide search space for answer (low, high)</li>
  <li>Pick mid as a possible answer</li>
  <li>Check: Is this answer valid?</li>
  <li>If valid → try better (smaller / larger)</li>
  <li>If invalid → discard that half</li>
</ol>

<hr>

<p><b>👉 Monotonic Check Rule</b></p>
<ul>
  <li>If mid works:
    <ul>
      <li>Smaller values might work OR</li>
      <li>Larger values might work</li>
    </ul>
    (depending on problem)
  </li>
</ul>

<hr>

<p><b>⏱ Time & Space</b></p>
<ul>
  <li>Time: O(log range × check)</li>
  <li>Space: O(1)</li>
</ul>

<hr>

<p><b>🧪 Typical Problems</b></p>
<ul>
  <li>Allocate books</li>
  <li>Aggressive cows</li>
  <li>Minimum days to make bouquets</li>
  <li>Koko eating bananas</li>
  <li>Painter’s partition</li>
</ul>

<hr>

<p><b>⚠ Common Mistakes</b></p>
<ul>
  <li>Wrong search space ❌</li>
  <li>Incorrect validity function ❌</li>
  <li>Moving wrong boundary ❌</li>
</ul>

<hr>

<p><b>🧠 One-line Recognition Trick</b></p>
<p>If min / max answer + condition → Binary Search on Answer</p>

<hr>

<p><b>🔑 Mental Template (short)</b></p>
<pre>
low = minimum possible
high = maximum possible

while low <= high:
  mid = low + (high - low)/2
  if isValid(mid):
    answer = mid
    move towards better answer
  else:
    discard this mid
</pre>
`,


stack: `
<h3>✅ TEMPLATE 9: STACK — MONOTONIC STACK</h3>

<p>This template solves a huge class of problems that look different but think the same.</p>

<hr>

<p><b>📌 When to use</b></p>
<ul>
  <li>Next Greater / Smaller Element</li>
  <li>Previous Greater / Smaller</li>
  <li>Histogram / Area problems</li>
  <li>Span problems</li>
</ul>

<hr>

<p><b>🧠 Core Idea</b></p>
<p>
Maintain a stack in a monotonic order<br>
(increasing or decreasing).<br>
Each element is pushed once and popped once.
</p>

<hr>

<p><b>🧩 Decide Stack Type (VERY IMPORTANT)</b></p>
<table border="1" cellpadding="6">
<tr><th>Problem asks for</th><th>Stack type</th></tr>
<tr><td>Next Greater</td><td>Decreasing</td></tr>
<tr><td>Next Smaller</td><td>Increasing</td></tr>
<tr><td>Previous Greater</td><td>Decreasing</td></tr>
<tr><td>Previous Smaller</td><td>Increasing</td></tr>
</table>

<hr>

<p><b>🧩 Mental Steps</b></p>
<ol>
  <li>Traverse array (left → right or right → left)</li>
  <li>While stack not empty and condition breaks → pop</li>
  <li>Top of stack → answer</li>
  <li>Push current element/index</li>
</ol>

<hr>

<p><b>👉 Index vs Value</b></p>
<ul>
  <li>Use index stack if distance/width needed</li>
  <li>Use value stack if only value needed</li>
</ul>

<hr>

<p><b>⏱ Time & Space</b></p>
<ul>
  <li>Time: O(n)</li>
  <li>Space: O(n)</li>
</ul>

<hr>

<p><b>🧪 Typical Problems</b></p>
<ul>
  <li>Next Greater Element</li>
  <li>Stock Span</li>
  <li>Largest Rectangle in Histogram</li>
  <li>Daily Temperatures</li>
</ul>

<hr>

<p><b>⚠ Common Mistakes</b></p>
<ul>
  <li>Using wrong comparison sign ❌</li>
  <li>Pushing value when index needed ❌</li>
  <li>Forgetting empty stack case ❌</li>
</ul>

<hr>

<p><b>🧠 One-line Recognition Trick</b></p>
<p>If next / previous + greater / smaller → Monotonic Stack</p>

<hr>

<p><b>🔑 Mental Template (short)</b></p>
<pre>
stack = empty
for each element:
  while stack not empty and condition fails:
    pop
  answer = stack.top or default
  push current
</pre>
`,

queue: `
<h3>✅ TEMPLATE 10: QUEUE / DEQUE PATTERNS</h3>

<p>This template is often used with sliding window and BFS.</p>

<hr>

<h4>🔹 TYPE 1: SIMPLE QUEUE (BFS)</h4>

<p><b>📌 When to use</b></p>
<ul>
  <li>Level order traversal</li>
  <li>Shortest path (unweighted graph / tree)</li>
</ul>

<p><b>🧠 Core Idea</b></p>
<p>First in → first out</p>

<p><b>🧩 Mental Steps</b></p>
<ol>
  <li>Push starting node</li>
  <li>While queue not empty:
    <ul>
      <li>Pop front</li>
      <li>Process</li>
      <li>Push neighbors</li>
    </ul>
  </li>
</ol>

<p><b>⏱ Time & Space</b></p>
<ul>
  <li>Time: O(n)</li>
  <li>Space: O(n)</li>
</ul>

<hr>

<h4>🔹 TYPE 2: DEQUE (Sliding Window Max / Min)</h4>

<p><b>📌 When to use</b></p>
<ul>
  <li>Sliding window maximum / minimum</li>
  <li>Fixed window size</li>
</ul>

<p><b>🧠 Core Idea</b></p>
<p>
Maintain useful elements only.<br>
Deque is monotonic.
</p>

<p><b>🧩 Mental Steps</b></p>
<ol>
  <li>Remove elements from back that are useless</li>
  <li>Add current index at back</li>
  <li>Remove front if out of window</li>
  <li>Front always gives answer</li>
</ol>

<p><b>⏱ Time & Space</b></p>
<ul>
  <li>Time: O(n)</li>
  <li>Space: O(k)</li>
</ul>

<hr>

<p><b>🧪 Typical Problems</b></p>
<ul>
  <li>Sliding window maximum</li>
  <li>Sliding window minimum</li>
  <li>First negative in window</li>
</ul>

<hr>

<p><b>⚠ Common Mistakes</b></p>
<ul>
  <li>Storing values instead of indices ❌</li>
  <li>Forgetting to remove out-of-window elements ❌</li>
</ul>

<hr>

<p><b>🧠 One-line Recognition Trick</b></p>
<p>If window max/min → Deque</p>

<hr>

<p><b>🔑 Mental Template (short)</b></p>
<pre>
deque = empty
for each index i:
  remove smaller elements from back
  add i
  remove front if out of window
  front gives answer
</pre>
`,

linked_list: `
<h3>✅ TEMPLATE 11: LINKED LIST PATTERNS</h3>
<p>Linked List problems look scary, but they reuse very few patterns.</p>

<hr>

<h4>🔹 TYPE 1: SLOW & FAST POINTER</h4>

<p><b>📌 When to use</b></p>
<ul>
<li>Detect cycle</li>
<li>Find middle node</li>
<li>Check palindrome</li>
</ul>

<p><b>🧠 Core Idea</b><br>
Fast moves 2 steps, slow moves 1 step.</p>

<p><b>🧩 Mental Steps</b></p>
<ol>
<li>slow = head, fast = head</li>
<li>Move slow by 1, fast by 2</li>
<li>If they meet → cycle exists</li>
</ol>

<p><b>Java Code (Cycle Detection)</b></p>
<pre>
ListNode slow = head, fast = head;
while(fast != null && fast.next != null){
    slow = slow.next;
    fast = fast.next.next;
    if(slow == fast) return true;
}
return false;
</pre>

<hr>

<h4>🔹 TYPE 2: REVERSAL (MOST IMPORTANT)</h4>

<p><b>🧠 Core Idea</b><br>
Reverse pointers, not values.</p>

<p><b>🔑 3 Pointer Rule</b><br>
prev ← curr ← next</p>

<p><b>Java Code (Reverse Linked List)</b></p>
<pre>
ListNode prev = null;
ListNode curr = head;

while(curr != null){
    ListNode next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
}
return prev;
</pre>

<hr>

<h4>🔹 TYPE 3: DUMMY NODE</h4>

<p><b>🧠 Core Idea</b><br>
Dummy avoids edge cases.</p>

<pre>
ListNode dummy = new ListNode(0);
dummy.next = head;
</pre>
`,

tree_dfs: `
<h3>✅ TEMPLATE 12: TREE — DFS (Depth First Search)</h3>

<p>Most tree problems are DFS + recursion in disguise.</p>

<hr>

<p><b>📌 When to use</b></p>
<ul>
<li>Height / depth</li>
<li>Diameter</li>
<li>Path problems</li>
<li>Sum based problems</li>
</ul>

<p><b>🧠 Core Idea</b><br>
Solve left subtree, solve right subtree, then combine.</p>

<p><b>🧩 Mental Steps</b></p>
<ol>
<li>Base case</li>
<li>Recurse left</li>
<li>Recurse right</li>
<li>Combine results</li>
</ol>

<p><b>Java Code (Height of Tree)</b></p>
<pre>
int height(TreeNode root){
    if(root == null) return 0;
    int left = height(root.left);
    int right = height(root.right);
    return 1 + Math.max(left, right);
}
</pre>

<p><b>🧠 Recognition</b><br>
If node depends on children → DFS</p>
`,

tree_bfs: `
<h3>✅ TEMPLATE 13: TREE — BFS (LEVEL ORDER)</h3>

<p><b>📌 When to use</b></p>
<ul>
<li>Level order traversal</li>
<li>Shortest path in tree</li>
<li>Zigzag / right view</li>
</ul>

<p><b>🧠 Core Idea</b><br>
Use queue, process level by level.</p>

<p><b>🧩 Mental Steps</b></p>
<ol>
<li>Push root</li>
<li>Process level size</li>
<li>Push children</li>
</ol>

<p><b>Java Code (Level Order)</b></p>
<pre>
Queue<TreeNode> q = new LinkedList<>();
q.offer(root);

while(!q.isEmpty()){
    int size = q.size();
    for(int i = 0; i < size; i++){
        TreeNode node = q.poll();
        if(node.left != null) q.offer(node.left);
        if(node.right != null) q.offer(node.right);
    }
}
</pre>
`,


graph: `
<h3>✅ TEMPLATE 14: GRAPH — BFS / DFS</h3>

<p><b>📌 When to use</b></p>
<ul>
<li>Connected components</li>
<li>Cycle detection</li>
<li>Flood fill</li>
</ul>

<p><b>🧠 Core Idea</b><br>
Visit each node once.</p>

<p><b>Java Code (DFS)</b></p>
<pre>
void dfs(int node, boolean[] visited, List<Integer>[] adj){
    visited[node] = true;
    for(int nei : adj[node]){
        if(!visited[nei]){
            dfs(nei, visited, adj);
        }
    }
}
</pre>

<p><b>Java Code (BFS)</b></p>
<pre>
Queue<Integer> q = new LinkedList<>();
q.offer(start);
visited[start] = true;

while(!q.isEmpty()){
    int node = q.poll();
    for(int nei : adj[node]){
        if(!visited[nei]){
            visited[nei] = true;
            q.offer(nei);
        }
    }
}
</pre>
`,

dp1d: `
<h3>✅ TEMPLATE 15: DYNAMIC PROGRAMMING — 1D DP</h3>

<p>If you master this, DP fear is gone.</p>

<p><b>📌 When to use</b></p>
<ul>
<li>Optimal value</li>
<li>One variable changing</li>
<li>Overlapping subproblems</li>
</ul>

<p><b>🧠 Core Idea</b><br>
Store answers of smaller problems.</p>

<p><b>🧩 Mental Steps</b></p>
<ol>
<li>Define dp[i]</li>
<li>Write recurrence</li>
<li>Base case</li>
<li>Iterate</li>
</ol>

<p><b>Java Code (Climbing Stairs)</b></p>
<pre>
int[] dp = new int[n+1];
dp[0] = 1;
dp[1] = 1;

for(int i = 2; i <= n; i++){
    dp[i] = dp[i-1] + dp[i-2];
}
return dp[n];
</pre>

<p><b>🧠 Recognition</b><br>
If only index changes → 1D DP</p>
`,

dp2d: `
<h3>✅ TEMPLATE 16: DYNAMIC PROGRAMMING — 2D DP</h3>

<p>This is used when <b>two things change together</b>.</p>

<hr>

<p><b>📌 When to use</b></p>
<ul>
  <li>Grid based problems</li>
  <li>Two sequences / strings</li>
  <li>Two indices are changing</li>
</ul>

<hr>

<p><b>🧠 Core Idea</b></p>
<p>
Store answers for combinations of two changing variables.
</p>

<hr>

<p><b>🧩 Identify the DP State</b></p>
<p>
If two things change → <b>dp[i][j]</b>
</p>

<hr>

<p><b>🧩 Mental Steps</b></p>
<ol>
  <li>Define what dp[i][j] represents</li>
  <li>Write recurrence relation</li>
  <li>Initialize base row and base column</li>
  <li>Fill the DP table row by row / column by column</li>
</ol>

<hr>

<p><b>👉 Base Case Rule</b></p>
<ul>
  <li>First row → depends only on left</li>
  <li>First column → depends only on top</li>
</ul>

<hr>

<p><b>⏱ Time & Space</b></p>
<ul>
  <li>Time: O(n × m)</li>
  <li>Space: O(n × m)</li>
</ul>

<hr>

<p><b>🧪 Typical Problems</b></p>
<ul>
  <li>Unique paths</li>
  <li>Minimum path sum</li>
  <li>Longest Common Subsequence</li>
  <li>Edit distance</li>
</ul>

<hr>

<p><b>⚠ Common Mistakes</b></p>
<ul>
  <li>Wrong base initialization ❌</li>
  <li>Wrong traversal order ❌</li>
</ul>

<hr>

<p><b>🧠 One-line Recognition Trick</b></p>
<p>If two indices change → 2D DP</p>

<hr>

<p><b>🔑 Mental Template (short)</b></p>
<pre>
dp[0][0] = base

for i from 1 to n:
  for j from 1 to m:
    dp[i][j] = f(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
</pre>
`,


subset_dp: `
<h3>✅ TEMPLATE 17: DP — PICK / NOT PICK (SUBSET DP)</h3>

<p>This single template solves MANY DP problems.</p>

<hr>

<p><b>📌 When to use</b></p>
<ul>
  <li>Subsets / combinations</li>
  <li>Target sum</li>
  <li>0/1 Knapsack</li>
</ul>

<hr>

<p><b>🧠 Core Idea</b></p>
<p>
For every element, you have two choices:<br>
<b>Pick it or Not Pick it</b>
</p>

<hr>

<p><b>🧩 DP State</b></p>
<p>
dp[index][target]
</p>

<hr>

<p><b>🧩 Mental Steps</b></p>
<ol>
  <li>Base case (index == 0)</li>
  <li>Not pick current element</li>
  <li>Pick current element (if possible)</li>
  <li>Combine results using OR / MAX / COUNT</li>
</ol>

<hr>

<p><b>👉 Transition Rule</b></p>
<ul>
  <li>Pick → reduce target</li>
  <li>Not pick → target stays same</li>
</ul>

<hr>

<p><b>🧪 Typical Problems</b></p>
<ul>
  <li>Subset sum</li>
  <li>Partition equal subset sum</li>
  <li>Count subsets with sum K</li>
</ul>

<hr>

<p><b>⚠ Common Mistakes</b></p>
<ul>
  <li>Wrong base case ❌</li>
  <li>Forgetting pick condition ❌</li>
</ul>

<hr>

<p><b>🧠 One-line Recognition Trick</b></p>
<p>If pick / not pick → Subset DP</p>

<hr>

<p><b>🔑 Mental Template (short)</b></p>
<pre>
notPick = dp[i-1][t]
pick = dp[i-1][t - a[i]] (if possible)

dp[i][t] = combine(pick, notPick)
</pre>
`,

backtracking: `
<h3>✅ TEMPLATE 18: BACKTRACKING</h3>

<p>Controlled recursion with undo.</p>

<hr>

<p><b>📌 When to use</b></p>
<ul>
  <li>Generate all possibilities</li>
  <li>Permutations</li>
  <li>Combinations</li>
  <li>N-Queens</li>
  <li>Sudoku</li>
</ul>

<hr>

<p><b>🧠 Core Idea</b></p>
<p>
Choose → Explore → Undo
</p>

<hr>

<p><b>🧩 Mental Steps</b></p>
<ol>
  <li>Choose an option</li>
  <li>Recurse to next level</li>
  <li>Undo the choice</li>
</ol>

<hr>

<p><b>👉 Undo Rule (VERY IMPORTANT)</b></p>
<ul>
  <li>Whatever you change before recursion, undo it after recursion</li>
</ul>

<hr>

<p><b>🧪 Typical Problems</b></p>
<ul>
  <li>Permutations</li>
  <li>Combinations</li>
  <li>Subsets</li>
  <li>N-Queens</li>
</ul>

<hr>

<p><b>⚠ Common Mistakes</b></p>
<ul>
  <li>Forgetting to undo ❌</li>
  <li>Wrong base condition ❌</li>
</ul>

<hr>

<p><b>🧠 One-line Recognition Trick</b></p>
<p>If problem asks “all possible” → Backtracking</p>

<hr>

<p><b>🔑 Mental Template (short)</b></p>
<pre>
backtrack(state):
  if base:
    record answer
    return

  for each choice:
    choose
    backtrack(updated state)
    undo
</pre>
`,


sequence_dp: `
<h3>✅ TEMPLATE 19: DP — SEQUENCE / STRING</h3>

<p>Used when comparing strings or sequences.</p>

<hr>

<p><b>📌 When to use</b></p>
<ul>
  <li>Two strings / sequences</li>
  <li>Subsequence / substring problems</li>
</ul>

<hr>

<p><b>🧠 Core Idea</b></p>
<p>
Compare prefixes of sequences.
</p>

<hr>

<p><b>🧩 DP State</b></p>
<p>
dp[i][j] = answer for first i chars of s1 and first j chars of s2
</p>

<hr>

<p><b>🧩 Mental Steps</b></p>
<ol>
  <li>Initialize dp[0][*] and dp[*][0]</li>
  <li>If characters match → diagonal</li>
  <li>If not match → take best of neighbors</li>
</ol>

<hr>

<p><b>👉 Matching Rule</b></p>
<ul>
  <li>Match → dp[i][j] = 1 + dp[i-1][j-1]</li>
  <li>No match → max / min(dp[i-1][j], dp[i][j-1])</li>
</ul>

<hr>

<p><b>🧪 Typical Problems</b></p>
<ul>
  <li>Longest Common Subsequence</li>
  <li>Edit Distance</li>
  <li>Longest Palindromic Subsequence</li>
</ul>

<hr>

<p><b>⚠ Common Mistakes</b></p>
<ul>
  <li>Wrong index mapping ❌</li>
  <li>Confusing substring with subsequence ❌</li>
</ul>

<hr>

<p><b>🧠 One-line Recognition Trick</b></p>
<p>If two strings compared → Sequence DP</p>

<hr>

<p><b>🔑 Mental Template (short)</b></p>
<pre>
if s1[i-1] == s2[j-1]:
  dp[i][j] = 1 + dp[i-1][j-1]
else:
  dp[i][j] = max(dp[i-1][j], dp[i][j-1])
</pre>
`,


unbounded_dp: `
<h3>✅ TEMPLATE 20: DP — UNBOUNDED KNAPSACK</h3>

<p>Items can be used unlimited times.</p>

<hr>

<p><b>📌 When to use</b></p>
<ul>
  <li>Unlimited supply of items</li>
  <li>Coins / rods / repetitions allowed</li>
</ul>

<hr>

<p><b>🧠 Core Idea</b></p>
<p>
After picking an item, you can stay on the same index.
</p>

<hr>

<p><b>🧩 DP State</b></p>
<p>
dp[index][target]
</p>

<hr>

<p><b>🧩 Mental Steps</b></p>
<ol>
  <li>Not pick → move to previous index</li>
  <li>Pick → stay on same index and reduce target</li>
</ol>

<hr>

<p><b>🧪 Typical Problems</b></p>
<ul>
  <li>Coin Change</li>
  <li>Rod Cutting</li>
</ul>

<hr>

<p><b>⚠ Common Mistakes</b></p>
<ul>
  <li>Moving index after pick ❌</li>
  <li>Mixing with 0/1 knapsack ❌</li>
</ul>

<hr>

<p><b>🧠 One-line Recognition Trick</b></p>
<p>If unlimited reuse allowed → Unbounded DP</p>

<hr>

<p><b>🔑 Mental Template (short)</b></p>
<pre>
notPick = dp[i-1][t]
pick = dp[i][t - val[i]]

dp[i][t] = combine(pick, notPick)
</pre>
`,

counting_dp: `
<h3>✅ TEMPLATE 21: DYNAMIC PROGRAMMING — COUNTING</h3>

<p>This pattern is about counting number of ways, not min or max.</p>

<hr>

<p><b>📌 When to use</b></p>
<ul>
<li>Count number of ways</li>
<li>Combinations / paths</li>
<li>Order may or may not matter</li>
</ul>

<hr>

<p><b>🧠 Core Idea</b><br>
Instead of min/max, we ADD ways.</p>

<hr>

<p><b>🧩 Mental Steps</b></p>
<ol>
<li>Define dp[i] = number of ways to reach i</li>
<li>Write recurrence by adding ways</li>
<li>Base case gives starting count</li>
<li>Build answer forward</li>
</ol>

<hr>

<p><b>⏱ Time & Space</b></p>
<ul>
<li>Time: O(n)</li>
<li>Space: O(n)</li>
</ul>

<hr>

<p><b>🧪 Typical Problems</b></p>
<ul>
<li>Climbing stairs (count)</li>
<li>Decode ways</li>
<li>Count paths in grid</li>
<li>Coin change (count ways)</li>
</ul>

<hr>

<p><b>⚠ Common Mistakes</b></p>
<ul>
<li>Using max/min instead of sum ❌</li>
<li>Wrong base initialization ❌</li>
</ul>

<hr>

<p><b>🧠 One-line Recognition Trick</b><br>
If problem asks "how many ways" → Counting DP</p>

<hr>

<p><b>Java Code (Climbing Stairs – Count)</b></p>
<pre>
int[] dp = new int[n+1];
dp[0] = 1;
dp[1] = 1;

for(int i = 2; i <= n; i++){
    dp[i] = dp[i-1] + dp[i-2];
}
return dp[n];
</pre>
`,

greedy: `
<h3>✅ TEMPLATE 23: GREEDY</h3>

<p>Greedy means taking the best decision at the current step.</p>

<hr>

<p><b>📌 When to use</b></p>
<ul>
<li>Optimization problems</li>
<li>Sorting helps</li>
<li>Local decision leads to global answer</li>
</ul>

<hr>

<p><b>🧠 Core Idea</b><br>
Take the best possible choice RIGHT NOW.</p>

<hr>

<p><b>🧩 Mental Steps</b></p>
<ol>
<li>Sort data (often required)</li>
<li>Make greedy choice</li>
<li>Move forward without reconsidering</li>
</ol>

<hr>

<p><b>⏱ Time & Space</b></p>
<ul>
<li>Time: O(n log n)</li>
<li>Space: O(1)</li>
</ul>

<hr>

<p><b>🧪 Typical Problems</b></p>
<ul>
<li>Activity selection</li>
<li>Minimum platforms</li>
<li>Job sequencing</li>
<li>Gas station</li>
</ul>

<hr>

<p><b>⚠ Common Mistakes</b></p>
<ul>
<li>Applying greedy where DP is required ❌</li>
<li>Not sorting before greedy ❌</li>
</ul>

<hr>

<p><b>🧠 One-line Recognition Trick</b><br>
If sorting + picking best → Greedy</p>

<hr>

<p><b>Java Code (Activity Selection)</b></p>
<pre>
Arrays.sort(activities, (a, b) -> a[1] - b[1]);

int count = 1;
int lastEnd = activities[0][1];

for(int i = 1; i < activities.length; i++){
    if(activities[i][0] >= lastEnd){
        count++;
        lastEnd = activities[i][1];
    }
}
return count;
</pre>
`,

interval: `
<h3>✅ TEMPLATE 24: INTERVAL PATTERNS</h3>

<p>Problems dealing with ranges and overlaps.</p>

<hr>

<p><b>📌 When to use</b></p>
<ul>
<li>Overlapping intervals</li>
<li>Merging ranges</li>
<li>Scheduling problems</li>
</ul>

<hr>

<p><b>🧠 Core Idea</b><br>
Sort intervals and compare adjacent ones.</p>

<hr>

<p><b>🧩 Mental Steps</b></p>
<ol>
<li>Sort intervals by start time</li>
<li>Compare current with previous</li>
<li>Merge or count based on overlap</li>
</ol>

<hr>

<p><b>⏱ Time & Space</b></p>
<ul>
<li>Time: O(n log n)</li>
<li>Space: O(n)</li>
</ul>

<hr>

<p><b>🧪 Typical Problems</b></p>
<ul>
<li>Merge intervals</li>
<li>Meeting rooms</li>
<li>Insert interval</li>
<li>Non-overlapping intervals</li>
</ul>

<hr>

<p><b>⚠ Common Mistakes</b></p>
<ul>
<li>Not sorting intervals ❌</li>
<li>Wrong overlap condition ❌</li>
</ul>

<hr>

<p><b>🧠 One-line Recognition Trick</b><br>
If ranges overlap → Interval Pattern</p>

<hr>

<p><b>Java Code (Merge Intervals)</b></p>
<pre>
Arrays.sort(intervals, (a, b) -> a[0] - b[0]);

List<int[]> res = new ArrayList<>();
int[] curr = intervals[0];

for(int i = 1; i < intervals.length; i++){
    if(intervals[i][0] <= curr[1]){
        curr[1] = Math.max(curr[1], intervals[i][1]);
    } else {
        res.add(curr);
        curr = intervals[i];
    }
}
res.add(curr);
</pre>
`,
};

function show(key){
  document.getElementById("content").innerHTML = data[key];
}

