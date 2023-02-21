---
id: 04-rails-flavored-ruby
title: Rails Flavored Ruby
---

Ruby *blocks* are *closures* (one shot anonymous functions with data attached)


```ruby
%w[A B C].map { |char| char.downcase }
=> ["a", "b", "c"]
%w[A B C].map(&:downcase)
=> ["a", "b", "c"]
```
2nd line is an example of using a Symbol

#### 4.3.3 Hashes and symbols
Hashes are essentially arrays that aren’t limited to integer indices. (PHP and Perl calls them associative arrays.) Hash indices are called keys. Keys can be almost any object.

Strings can be used for hash keys. But much more common to use symbols.
`user = { :name => "Michael Hartl", :email => "michael@example.com" }`
or, more simply:
`{name: "Simon", email: "simon@example.com" }`

:name => and name: are effectively the same only inside literal hashes


#### 4.4 Ruby classes

literal vs named constructors
```ruby
s = "foobar"  # literal constructor
s = String.new("foobar")  # named
```

#### 4.4.3 Modifying built-in classes
Ruby classes can be opened and modi- fied

```ruby
class String
  def palindrome?
    self == self.reverse
  end
end
```

